const jwt=  require('jsonwebtoken');

//Generate an access token and a refresh token for this database user
const jwtTokens = (firstname, lastname, email, phone, password, detail, facebook) => {
  const user = {firstname:firstname,lastname:lastname, email:email, phone:phone, password:password, detail:detail, facebook:facebook}; 
  
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15m' });
  return ({ accessToken, refreshToken });
}
module.exports = {jwtTokens};