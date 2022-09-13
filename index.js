var intvl1;
var active = false;
var searchCt = 0;
var win;

function toggleElems() {
    active = !active
    var elems = document.getElementsByClassName("hide");
    for (var i = 0; i < elems.length; i++) {
        if (active == true) {
            elems[i].style.display = "none";
        } else {
            elems[i].style.display = "none";
        }
    }
}

function stop() {
    clearInterval(intvl1);
    clearInterval(intvl2);
    searchCt = 0;
    document.getElementById("searchCt").innerHTML = searchCt;
    win.close()
    win = null;
    active = false;
    document.getElementById("stopBtn").style.display = "none";
}

function search() {
    searchCt++;
    if (searchCt > document.getElementById("searchNum").value && active == true) {
        stop()
        active = false;
    } else {
        active = true;
        var x = 582,
            y = 300,
            w = 205,
            h = 200;
        var term = Math.random().toString(16).substr(2, 8);
        if (searchCt == 1) {
            win = window.open(`https://www.bing.com/search?q=${term}`, "", "width=" + w + ",height=" + h);
            win.moveTo(x, y);
        } else if (searchCt > 1) {
            win.location.href = `https://www.bing.com/search?q=${term}`;
        }
        document.getElementById("searchCt").innerHTML = searchCt;
    }
}

function start() {
    intvl1 = setInterval(search, 4500);
    document.getElementById("stopBtn").style.display = "block";

}
