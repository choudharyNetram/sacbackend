/*module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});

*/

const crypto = require('crypto');

module.exports = ({ env }) => ({
  // Other configurations...
  apiToken: {
    salt: crypto.randomBytes(16).toString('base64'),
  },
  auth: {
    secret: crypto.randomBytes(16).toString('base64'),
  },
 
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});

