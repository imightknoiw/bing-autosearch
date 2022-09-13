var intvl1, intvl2;

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

function search(){
  var x = 5, y = 5, w=200, h=200;
  var term = genTerm(Math.floor(Math.random()));
  var win = window.open(`https://www.bing.com/search?q=${term}`, "", 
          "width=" + w + ",height=" + h);
  win.moveTo(x,y);
}

function start(){
  setInterval(search, 4500);
}

function stop(){
  clearInterval(intvl1);
  clearInterval(intvl2);
}
