function addT() {

    for (var i = 1; i <= 40; i++) {
        document.getElementById("colorT").innerHTML += "<tr id='tr" + i + "'></tr>";

        for (var j = 1; j <= 100; j++) {
            document.getElementById("tr" + i).innerHTML += "<td></td>";

        }
    }
}
function colorCol(x) {
    var color;
    color = x.target;
    color.style.background = document.getElementById("cl").value;
}