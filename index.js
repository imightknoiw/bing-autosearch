var intvl1, intvl2
function genTerm(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
var searchCt = 0;
var win;
function search(){
  if (searchCt > document.getElementsByName("searchNum")[0].value;){
    stop()
  }else{
  var x = 5, y = 5, w=200, h=200;
  var term = genTerm(Math.floor(Math.random()));
  searchCt += 1;    
  if (searchCt = 1){    
  win = window.open(`https://www.bing.com/search?q=${term}`, "", 
          "width=" + w + ",height=" + h);
  win.moveTo(x,y);
  }else if (searchCt > 1){
    win.location.href = `https://www.bing.com/search?q=${term}`;
  }
}
}
function start(){
  setInterval(search, 4500);
  document.getElementsByTagName("input")[2].style.display = "block";  
}

function stop(elem){
  clearInterval(intvl1);
  clearInterval(intvl2);
  searchCt = 0;  
  win.close()
  win = null;
  document.getElementsByTagName("input")[2].style.display = "none";   
}
