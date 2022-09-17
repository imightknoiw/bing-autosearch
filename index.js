var intvl1;
var active = false;
var searchCt = 0;
var win;

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
    searchCt++;
    if (searchCt > document.getElementById("searchNum").value) {
        stop();
    } else {
        var x = 582,
            y = 335,
            w = 205,
            h = 200;
        var term = Math.random().toString(16).substr(2, 8);
        if (searchCt == 1) {
            win = window.open(`https://www.bing.com/search?q=${term}#id_rc`, "", "width=" + w + ",height=" + h + ",status=no,left=200");
            win.moveTo(x, y);
        } else if (searchCt > 1) {
            win.location.href = `https://www.bing.com/search?q=${term}#id_rc`;
        }
        document.getElementById("searchCt").innerHTML = searchCt;
    }
}

function start() {
    var searchItvl = document.getElementById("searchIntvl");
    if (searchItv1.value.length > 3) {
        intvl = setInterval(search, searchItvl);
    } else if (searchItv1.value.length == 1) {
        searchItvl = Math.round(searchInvtl * 1000)
        intvl = setInterval(search, searchItvl);
    } else {
        searchItvl = Math.round(3500);
        intvl = setInterval(search, searchItvl);
    }
    document.getElementById("stopBtn").style.display = "block";
    active = true;
    document.getElementById("searchCt").innerHTML = searchCt;
    toggleElems();
}
