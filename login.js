const request = require('request-promise');
const endpoint = 'https://robertsspaceindustries.com/api/account/signin';
const cookieParser = require('set-cookie-parser');


getTokenFromCookie = (response)=>{
    const token = cookieParser.parse(response.headers['set-cookie']).find(cookie => cookie.name ==='Rsi-Token').value;
    return token;
}

login = async (username,password)=>{
    const result = {
        success: false,
        token: null
    }

   return await request.post(endpoint,{json:{username,password},resolveWithFullResponse:true}).then(function(response){
        if(response.body.success === 1){
            console.log(`Successfully logged in as ${response.body.data.displayname}`);
            const token = getTokenFromCookie(response);
            if(token){
                result.token = token;
                result.success = true;
                return(result);
            }else{
               console.log('No token found'); 
               return result;
            }
        }
        else{
            console.log(`Login failed: ${response.body.code}`);
            return result;
        }
    }).catch((error)=>{
        console.log('Error on login request');
        console.log(error);
    });
}

module.exports = login;