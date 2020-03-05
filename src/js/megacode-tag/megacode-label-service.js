var mapLabels = new Map();

mapLabels.set("basic.nameapplication","Megacode");

mapLabels.set("login.signin","Sign In");
mapLabels.set("login.emailadress","Email address");
mapLabels.set("login.password","Password");
mapLabels.set("login.remember","Remember me");
mapLabels.set("login.login"," Log In");
mapLabels.set("login.forgotpassword","Forgot your password?");
mapLabels.set("login.dontaccount","Don't have an account? ");
mapLabels.set("login.signup","Sign Up");

function getMapString(label){
    if(mapLabels.has(label)){
        return mapLabels.get(label);
    }
    return "default.label";
}