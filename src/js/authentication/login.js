loadScript("../../assets/js/constants/constant.js");
loadScript("../../assets/js/service/login-service.js");

function login(){
    var email = $("#emailaddress").val();
    var password = $("#password").val();

    if(email != null && email!=undefined && email != "" && password != null && password != undefined && password != ""){
        var response = loginService(email, password);
        if(response.error){
            errorMessage("Error",response.message);
        }else{
            var content = response.content;
            MegaCodeStorage.setItem(STORAGE.KEY_TOKEN_MEGACODE_STORAGE,content.token);
            MegaCodeStorage.setItem(STORAGE.KEY_PROFILE_NAME_MEGACODE_STORAGE,content.name);
            MegaCodeStorage.setItem(STORAGE.KEY_IMAGE_B64_MEGACODE_STORAGE,content.image_b64);
    
            redirectPrincipalPageUser();
        }
    }
}

function redirectPrincipalPageUser(){
    location.href = "../../html/principal-user-page/principal-user-page.html";
}