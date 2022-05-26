const jwt=  require('jsonwebtoken');

//Generate an access token and a refresh token for this database user
const jwtTokens = (email, password, salt, firstname, lastname, profile, contact, type) => {
  const user = {email: email, password:password, salt:salt, firstname:firstname, lastname:lastname, profile:profile, contact:contact, type:type}; 
  
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15m' });
  return ({ accessToken, refreshToken });
}
module.exports = {jwtTokens};