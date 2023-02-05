function temperature() {

    var c = document.getElementById("celsius").value;
    var f = (c * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = f;
    window.alert("converted")
}

function weight() {

    var k = document.getElementById("kilo").value;
    var p = k * 2.2;
    document.getElementById("pounds").value = p;

}

function distance() {

    var km = document.getElementById("km").value;
    var m = km * 0.6213;
    document.getElementById("miles").value = m;


}