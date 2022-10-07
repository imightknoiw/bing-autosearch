var iframe = document.getElementsByTagName('iframe')[0];

function toggleElems() {
    var elems = document.getElementsByClassName("hide");
    if (active == true) {
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
        }
    } else {
        for (let i = 0; i < elems.length; i++) {
            elems[i].style.display = "block";
        }
    }
}

function start() {
    if (document.getElementById("deviceTypePC").checked){
      iframe.style.visibility = "visible"; 
      iframe.src = "https://replit.com/@bballer/Chrome-WebDriver-PC?embed=true";
      toggleElems();
    }else if(document.getElementById("deviceTypeMOBILE").checked){
      iframe.style.visibility = "visible"; 
      iframe.src = "https://replit.com/@bballer/Chrome-WebDriver-MOBILE?embed=true";
      toggleElems();
    }     
}
