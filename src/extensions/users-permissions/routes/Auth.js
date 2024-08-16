module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/auth/send-phone-verification',
        handler: 'Auth.sendPhoneVerification',
        config: {
          policies: [],
          prefix: ''
        }
      },
      {
        method: 'POST',
        path: '/auth/verify-phone',
        handler: 'Auth.verifyPhoneNumber',
        config: {
          policies: [],
          prefix: ''
        }
      }
    ]
  };