/* $ = jQuery */
$("h1").css("color","white");

/* We can use Body or document*/
$("body").keypress( function(event) {
$("h1").text(event.key);
console.log(event.key);
});
