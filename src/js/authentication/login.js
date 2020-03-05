function login(){
    var email = $("#emailaddress").val();
    var password = $("#password").val();

    var response = loginService(email, password);

    if(response.error){
        console.log(response);
    }else{
        console.log(response);
    }
}

function redirectPrincipalPageUser(){
    location.href = "../../html/principal-user-page/principal-user-page.html";
}

loadScript("../../assets/js/service/login-service.js");