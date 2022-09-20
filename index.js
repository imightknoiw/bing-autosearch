var intvl1;
var active = false;
var searchCt = 0;
var win;
function randomStr(){
let str = Math.random().toString(16).substr(2, 8);
return str;
}
function toggleElems() {
    var elems = document.getElementsByClassName("hide");
    if (active == true) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
        }
    } else {
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "block";
        }
    }
}

function stop() {
    clearInterval(intvl);
    searchCt = 0;
    win.close();
    win = null;
    active = false;
    document.getElementById("stopBtn").style.display = "none";
    toggleElems();
    document.getElementById("searchNum").value = "";
}

function search() {
    if (searchCt > document.getElementById("searchNum").value) {
        stop();
    } else if (searchCt > 0) {
            searchCt++;
            win.location.href = `https://www.bing.com/search?q=${randomStr()}#id_rc`;
            waitLoad();
        }
        document.getElementById("searchCt").innerHTML = searchCt;
}
function waitLoad(){
    win.addEventListener('load', function(){setTimeout(search, 3000)}, false);
}
function start() {
    var x = 582,y = 335,w = 205,h = 200;
    win = window.open(`https://www.bing.com/search?q=${randomStr()}#id_rc`, "", "width=" + w + ",height=" + h + ",status=no");
    win.moveTo(x, y);
    searchCt++;
    waitLoad();
    active = true;
    document.getElementById("stopBtn").style.display = "block";
    toggleElems();
    document.getElementById("searchCt").innerHTML = searchCt;
}
