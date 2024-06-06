document.getElementById("searchlogo").onclick = function () {
    function opentab(url, width = 800, height = 800) {
        window.open(url, '_blank').focus();
    }
    opentab("https://google.com/search?q=" + document.getElementById("searchbar").value);
}
var input = document.getElementById("searchbar");
input.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault;
        document.getElementById("searchlogo").click();
    }
})
document.addEventListener("keydown", function(e) {
    document.getElementById("searchbar").focus();
})