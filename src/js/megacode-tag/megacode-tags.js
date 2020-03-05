function loadScript(url){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
            }
        };
    } else {  //Others
        script.onload = function(){
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function customTag(tagName,fn){
    setTimeout(function(){
        document.createElement(tagName);
        var tagInstances = document.getElementsByTagName(tagName);
        for ( var i = 0; i < tagInstances.length; i++) {
            fn(tagInstances[i]);
        }
    },100);
  }
   
function setCodeLabel(element){
    if (element.attributes.label){
        var label = element.attributes.label.value;
        element.innerHTML = getMapString(label);
    }
}

loadScript("../../assets/js/megacode-tag/megacode-label-service.js");

customTag("megacode-label",setCodeLabel);