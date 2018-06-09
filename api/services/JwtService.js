const jwt = require('jsonwebtoken');
const jwtSecret = process.env.TOKEN_SECRET || 'default_token_secret';

module.exports = {  
  issue: function (payload) {
    const token = jwt.sign(payload, jwtSecret, {expiresIn: 180 * 60});
    return token;
  },

  verify: function (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) { reject(err); }
        resolve(decoded);
      });
    });
  }
};
