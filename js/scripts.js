$(document).ready(function() {  


$("#dark").click(function () {
$("body").removeClass();
$("body").addClass("first");
});

$("#white").click(function () {
$("body").removeClass();
$("body").addClass("second");
});

$("p#highlight").click(function () {
$("p").removeClass("enhance");
$("p").addClass("enhance");
});

});