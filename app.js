function display(str) {
    $("#entry").val(str);

}

function disEq(str) {
    $(".history").val(str);
}


let disVar = "";




$("._pi").click(function () {

    // disVar += "3.1459";
    // display(disVar);

});


$("._e").click(function () {

    // disVar += "2.71";
    // display(disVar);
});
$("._perc").click(function () {

    disVar += "%";
    display(disVar);
});
$("._AC").click(function () {

    disVar = disVar.substring(0, disVar.length - 1);

    display(disVar);

});
$("._7").click(function () {

    disVar += "7";
    display(disVar);
});
$("._8").click(function () {
    disVar += "8";
    display(disVar);
});
$("._9").click(function () {
    disVar += "9";
    display(disVar);
});
$("._d").click(function () {
    disVar += "/";
    display(disVar);
});
$("._4").click(function () {
    disVar += "4";
    display(disVar);
});
$("._5").click(function () {
    disVar += "5";
    display(disVar);
});
$("._6").click(function () {
    disVar += "6";
    display(disVar);
});
$("._x").click(function () {

    disVar += "*";
    display(disVar);

});
$("._1").click(function () {
    disVar += "1";
    display(disVar);
});
$("._2").click(function () {
    disVar += "2";
    display(disVar);
});
$("._3").click(function () {
    disVar += "3";
    display(disVar);
});
$("._sub").click(function () {
    disVar += "-";
    display(disVar);
});
$("._0").click(function () {
    disVar += "0";
    display(disVar);
});
$("._dec").click(function () {
    disVar += ".";
    display(disVar);
});
$("._eq").click(function () {

    let ans = eval($("#entry").val());
    disVar = $("#entry").val();
    disEq(disVar + "=" + ans);
    display(ans);
    disVar = "";
});

$("._add").click(function () {
    disVar += "+";
    display(disVar);

});


