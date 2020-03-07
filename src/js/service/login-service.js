loadScript("../../assets/js/constants/url-constants.js");

function loginService(email, password){
    if(WITH_SERVICES){
        var url = authenticationUrl.login;

        /**
         * Falta consumir el servicio de login, la firma de aca abajo esta aproada y no se puede cambiar
         */
        return null;

    }else{
        if(email == CONSTANT_WITHOUT_SERVICES.EMAIL_LOGIN && password == CONSTANT_WITHOUT_SERVICES.PASSWORD_LOGIN){
            return {
                error: false,
                message: CONSTANT_WITHOUT_SERVICES.MESSAGE_LOGIN_SUCCESS,
                content: {
                    token: CONSTANT_WITHOUT_SERVICES.TOKEN_LOGIN,
                    name: CONSTANT_WITHOUT_SERVICES.USER_NAME_LOGIN,
                    image_b64: CONSTANT_WITHOUT_SERVICES.IMAGE_B64_LOGIN
                }
            }
        }else{
            return {
                error: true,
                message: CONSTANT_WITHOUT_SERVICES.MESSAGE_LOGIN_ERROR
            }
        }
    }
}

function autoLoginService(token){
    if(WITH_SERVICES){
        var url = authenticationUrl.validateToken
        /**
         * Consumir servicio para validar el token que esta guardado en session
         */
    }else{
        if(token==CONSTANT_WITHOUT_SERVICES.TOKEN_LOGIN){
            return {
                error: false,
                message: CONSTANT_WITHOUT_SERVICES.MESSAGE_LOGIN_SUCCESS
            }
        }

        return {
            error: true,
            message: CONSTANT_WITHOUT_SERVICES.MESSAGE_LOGIN_ERROR
        }
    }
}