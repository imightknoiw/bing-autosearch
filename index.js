var intvl1;
var active = false;
var searchCt = 0;
var win;
function toggleElems() {
    active = !active;
    var elems = document.getElementsByClassName("hide");
    for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = (!(active == false)) ? "none" : "block";
    }
}

function stop() {
    clearInterval(intvl1);
    searchCt = 0;
    document.getElementById("searchCt").innerHTML = searchCt;
    win.close();
    win = null;
    active = false;
    document.getElementById("stopBtn").style.display = "none";
    toggleElems();
    document.getElementById("searchNum").value = "";
}

function search() {
    searchCt++;
    if (searchCt > document.getElementById("searchNum").value) {
        stop();
    } else {
        var x = 582,
            y = 300,
            w = 205,
            h = 200;
        var term = Math.random().toString(16).substr(2, 8);
        if (searchCt == 1) {
            win = window.open(`https://www.bing.com/search?q=${term}`, "", "width=" + w + ",height=" + h);
            win.moveTo(x, y);
            win.scroll(0, 500);
        } else if (searchCt > 1) {
            win.location.href = `https://www.bing.com/search?q=${term}`;
            win.scroll(0, 100);
        }
        document.getElementById("searchCt").innerHTML = searchCt;
    }
}

function start() {
    intvl1 = setInterval(search, 4500);
    document.getElementById("stopBtn").style.display = "block";
    active = true;
    toggleElems();
}
