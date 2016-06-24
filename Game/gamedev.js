$( document ).ready(function() {

$("#goLeft1").click(function() {
	$("#exploreLeft1").toggle();
}
$(document).on('mousemove', function(e){
    $('#spoderman').css({
       left:  MouseX,
       top:   MouseY
    });
});

function fight(){
	var fightchoice = prompt("What do you do? (fight or run").toLowerCase;
	if (fightchoice = "fight"){
		alert("Good job! You killed the enemy!")
	}
	if (fightchoice = "run")
		alert("You successfully ran away!")
}

});