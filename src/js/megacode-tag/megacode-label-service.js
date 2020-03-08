var mapLabels = new Map();

mapLabels.set("basic.nameapplication","Megacode");

/**
 * Login
 */
mapLabels.set("login.signin","Sign In");
mapLabels.set("login.emailadress","Email address");
mapLabels.set("login.password","Password");
mapLabels.set("login.remember","Remember me");
mapLabels.set("login.login"," Log In");
mapLabels.set("login.forgotpassword","Forgot your password?");
mapLabels.set("login.dontaccount","Don't have an account? ");
mapLabels.set("login.signup","Sign Up");

/**
 * Register
 */
mapLabels.set("register.title","Register");
mapLabels.set("register.fullname","Full Name");
mapLabels.set("register.emailaddress","Email address");
mapLabels.set("register.password","Password");
mapLabels.set("register.accept","I accept");
mapLabels.set("register.termscondi","Terms and Conditions");
mapLabels.set("register.signup","Sign Up");
mapLabels.set("register.alreadyaccount","Already have account?");
mapLabels.set("register.close","Close");


function getMapString(label){
    if(mapLabels.has(label)){
        return mapLabels.get(label);
    }
    return "default.label";
}