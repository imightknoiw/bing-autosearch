var win = null;
var active = false;
var searchCt = 0;
var searchGoal;
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
    searchCt = 0;
    win.close();
    win = null;
    active = false;
    document.getElementById("stopBtn").style.display = "none";
    toggleElems();
    document.getElementById("searchNum").value = "";
}

function search() {
    searchCt++;
    if (searchCt > searchGoal) {
        stop();
    } else if (searchCt < searchGoal) {
            win.location.href = `https://www.bing.com/search?q=${randomStr()}#id_rc`;
            waitLoad();
        }
        document.getElementById("searchCt").innerHTML = searchCt;
}
function waitLoad(){
    win.addEventListener('load', function(){setTimeout(search, 3000)});
}
function start() {
    searchGoal = document.getElementById("searchNum").value; 
    var x = 582,y = 335,w = 205,h = 200;
    win = window.open(`https://www.bing.com/search?q=${randomStr()}#id_rc`, "", "width=" + w + ",height=" + h + ",status=no");
    win.moveTo(x, y);
    searchCt++;
    document.getElementById("searchCt").innerHTML = searchCt;
    waitLoad();
    active = true;
    document.getElementById("stopBtn").style.display = "block";
    toggleElems();
}
var child = window.open('http://google.com','','toolbar=0,status=0,width=626,height=436');
var timer = setInterval(checkChild, 500);

function checkClose() {
    if (win.closed) {
        alert("Child window closed");   
        clearInterval(timer);
    }
}
