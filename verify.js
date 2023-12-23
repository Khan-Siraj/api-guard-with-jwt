const jwt = require('jsonwebtoken');

module.exports = function (secret_key) {
    return async (request, response, next) => {
        if(!secret_key)
        {
            return response.status(404)
            .json({
                message: 'secret_key not found/valid',
            }) 
        }
        const authorization = request.headers['authorization']
        if(!authorization){
            {
                return response.status(404)
                .json({
                    message: 'token not found/valid',
                }) 
            }
        }
        const [token_type,token] = authorization.split(" ")
        if(token_type != 'Bearer')
        {
            return response.status(401)
            .json({
                message: 'Invalid token type!',
                error: 'Send a (Bearer) token only'
            })
        }

        if(!token){
            {
                return response.status(404)
                .json({
                    message: 'token not found/valid',
                }) 
            }
        }
    
        try {
            await jwt.verify(token,secret_key)
            next()
        }catch (error) {
            response.status(401)
            .json({
                message: 'Unauthorized Access !',
                error: error
            }) 
        }
    }
}