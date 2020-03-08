function autoLogin(){
    console.log(STORAGE);
    var token = MegaCodeStorage.getItem(STORAGE.KEY_TOKEN_MEGACODE_STORAGE);
    
    if(token!= null && token != undefined && token != ""){
        var response = autoLoginService(token);

        if(!response.error){
            redirectPrincipalPageUser();
        }
    }
    
}

function redirectPrincipalPageUser(){
    location.href = "../../html/principal-user-page/principal-user-page.html";
}

var p  = new Promise(function (resolve, reject) {
    loadScript("../../assets/js/constants/constant.js");
    loadScript("../../assets/js/service/login-service.js");
    resolve();
});

p.then(function(){
    autoLogin();
});

