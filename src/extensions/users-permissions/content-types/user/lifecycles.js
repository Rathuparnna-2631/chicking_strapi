// path: src/api/user/models/user.js

module.exports = {
    lifecycles: {
      async beforeCreate(data) {
        if (data.profilemetadata) {
          // Populate profilemetadata component with user fields if provided
          data.profilemetadata.firstName = data.firstName || data.profilemetadata.firstName;
          data.profilemetadata.lastName = data.lastName || data.profilemetadata.lastName;
         data.profilemetadata.phoneNumber = data.phoneNumber || data.profilemetadata.phoneNumber;
          data.profilemetadata.email = data.email || data.profilemetadata.email;
        }
      },
      async beforeUpdate(params, data) {
        if (data.profilemetadata) {
          // Populate profilemetadata component with user fields if provided
          data.profilemetadata.firstName = data.firstName || data.profilemetadata.firstName;
          data.profilemetadata.lastName = data.lastName || data.profilemetadata.lastName;
          data.profilemetadata.phoneNumber = data.phoneNumber || data.profilemetadata.phoneNumber;
          data.profilemetadata.email = data.email || data.profilemetadata.email;
        }
      }
    }
  };
  