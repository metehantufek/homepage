let ranges = ["morning.jpg", "noon.jpg", "night.jpg"];
let currange = 0;
/*

morning: 04.00 - 12.00
noon:    12.00 - 20.00
night:   20.00 - 04.00

*/

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}
function setBg() {
    document.getElementById("glasschild").style.backgroundImage = "url(" + ranges[currange] + ")";
}
var changeTime = document.getElementById("time");
var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();
var hdisplay = checkTime(hours);
var mdisplay = checkTime(minutes);
changeTime.innerHTML = hdisplay + ":" + mdisplay;
var dateydisplayy = today.getFullYear();
var dateydisplaym = checkTime(today.getMonth() + 1);
var dateydisplayd = checkTime(today.getDate());
document.getElementById("date").innerHTML = dateydisplayd + "/" + dateydisplaym + "/" + dateydisplayy;
if (4 <= hours && hours < 12) {
    currange = 0;
}
else if (12 <= hours && hours < 20) {
    currange = 1;
}
else if (20 <= hours || hours < 4) {
    currange = 2;
}
setBg();
setInterval(function () {
    var changeTime = document.getElementById("time");
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var hdisplay = checkTime(hours);
    var mdisplay = checkTime(minutes);
    changeTime.innerHTML = hdisplay + ":" + mdisplay;
    var dateydisplayy = today.getFullYear();
    var dateydisplaym = checkTime(today.getMonth() + 1);
    var dateydisplayd = checkTime(today.getDate());
    document.getElementById("date").innerHTML = dateydisplayd + "/" + dateydisplaym + "/" + dateydisplayy;
    if (4 <= hours && hours < 12) {
        currange = 0;
    }
    else if (12 <= hours && hours < 20) {
        currange = 1;
    }
    else if (20 <= hours || hours < 4) {
        currange = 2;
    }
    setBg();
}, 1000);