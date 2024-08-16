'use strict';

const { sanitizeEntity } = require('@strapi/utils');
const twilio = require('twilio');

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports = {
  async sendPhoneVerification(ctx) {
    const { phoneNumber } = ctx.request.body;
    
    // Generate a random 6-digit code
    const verificationCode = Math.floor(100000 + Math.random() * 900000);

    try {
      // Send SMS using Twilio
      await twilioClient.messages.create({
        body: `Your verification code is: ${verificationCode}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber
      });

      // Store the verification code in the database
      // You might want to create a new content type for this
      const verificationRecord = await strapi.query('api::verification.verification').create({
        data: {
          phoneNumber,
          code: verificationCode,
          expiresAt: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes expiration
        }
      });

      ctx.send({ message: 'Verification code sent successfully' });
    } catch (error) {
      ctx.badRequest('Failed to send verification code');
    }
  },

  async verifyPhoneNumber(ctx) {
    const { phoneNumber, code } = ctx.request.body;

    const verificationRecord = await strapi.query('api::verification.verification').findOne({
      where: {
        phoneNumber,
        code,
        expiresAt: { $gt: new Date() }
      }
    });

    if (!verificationRecord) {
      return ctx.badRequest('Invalid or expired verification code');
    }

    // Find or create user
    let user = await strapi.query('plugin::users-permissions.user').findOne({
      where: { phoneNumber }
    });

    if (!user) {
      user = await strapi.query('plugin::users-permissions.user').create({
        data: {
          username: phoneNumber,
          phoneNumber,
          role: await strapi.query('plugin::users-permissions.role').findOne({ where: { type: 'authenticated' } })
        }
      });
    }

    // Generate JWT token
    const jwt = strapi.plugins['users-permissions'].services.jwt.issue({
      id: user.id,
    });

    // Delete the used verification code
    await strapi.query('api::verification.verification').delete({
      where: { id: verificationRecord.id }
    });

    ctx.send({
      jwt,
      user: sanitizeEntity(user, { model: strapi.models.user }),
    });
  }
};