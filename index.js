var intvl1, intvl2
var searchCt = 0;
var win;
function stop(){
  clearInterval(intvl1);
  clearInterval(intvl2);
  searchCt = 0;
  document.getElementById("searchCt").innerHTML = searchCt;
  win.close()
  win = null;
  document.getElementById("stopBtn").style.display = "none";   
}
function search(){
  if (searchCt > document.getElementById("searchNum").value){
    stop()
  }else{
  var x = 582, y = 500, w=205, h=200;
  var term = Math.random().toString(16).substr(2, 8);
  searchCt++;    
  if (searchCt == 1){    
  win = window.open(`https://www.bing.com/search?q=${term}`, "", 
          "width=" + w + ",height=" + h);
  win.moveTo(x,y);
  }else if (searchCt > 1){
    win.location.href = `https://www.bing.com/search?q=${term}`;
  }
  document.getElementById("searchCt").innerHTML = searchCt;
}
}
function start(){
  intvl1 = setInterval(search, 4500);
  document.getElementById("stopBtn").style.display = "block";
  var elems = document.getElementsByClassName("hide");
  for (var i = 0;i < thingsToHide.length;i++){
    elems[i].style.display = "none";
}
}
