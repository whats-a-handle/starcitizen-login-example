# starcitizen-login-example
Example script to login to RSI (https://robertsspaceindustries.com/) aka StarCitizen's website with nodejs
## How to Use
1. Import it like `const login = require('./login')`
2. Send in your username and password `const result = login(username,password)`
3. Get your token and send the token in your headers as `'x-rsi-token' : result.token` when making requests to rsi that require authentication
4. Done

## Notes
- Won't work with 2Factor or Mutlistep Authentication, since that expects a verification code
- This will break if they change the login endpoint or you get detected as a robot
