var iframe = document.getElementsByTagName('iframe')[0];


function start() {
    if (document.getElementById("deviceTypePC").checked){
      iframe.style.visibility = "visible"; 
      iframe.src = "https://replit.com/@bballer/Chrome-WebDriver-PC?embed=true";
    }else if(document.getElementById("deviceTypeMOBILE").checked){
      iframe.style.visibility = "visible"; 
      iframe.src = "https://replit.com/@bballer/Chrome-WebDriver-MOBILE?embed=true";
    }     
}
