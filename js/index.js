// JavaScript Document

var x = "x"
var o = "o"
var count = 0;  // the number of box clicked.
var o_win = 0;  // the number of times o wins.
var x_win = 0;  // the number of times x wins.
var curr_winner = '';  // stores the winner to prevent re-calculation of winner.

$(document).ready(function() {


// The block below is executed each time a box is clicked.
$('#game li').click(function(){

  if (curr_winner != '')
   {
	 // Reset the game when there is a winner.
	 reset()
   }
  else if (count == 9)
  {
	// Reset the game when there is a tie.
	alert('Its a tie. It will restart.')
	reset()
  }
  else if ($(this).hasClass('disable'))
  {
	// Prompt the user if the user click a previously clicked box.
    alert('Already selected')
  }
  else if (count%2 == 0)
  {
	  // Execute for odd step to determine whether o wins.
	  count++
	  $(this).text(o)
      $(this).addClass('disable o btn-primary')
	    if (wins('o'))
	    {
	       $('#messages').text('o wins')
	       count = 0
	       o_win++
           $('#o_win').text(o_win)
		   curr_winner = 'o'
        }
		
  }
   else  
  {
	  count++
    $(this).text(x)
    $(this).addClass('disable x btn-info')
	   
	   if (wins('x'))
        {
	      $('#messages').text('x wins')
	      count = 0
	      x_win++
	      $('#x_win').text(x_win)
		  curr_winner = 'x'
        }
 		
  }

});
   
    
  
});


/**
 * Reset the game.
*/
function reset() {	
	$("#game li").text("+")
	$("#game li").removeClass('disable')
	$("#game li").removeClass('o')
	$("#game li").removeClass('x')
	$("#game li").removeClass('btn-primary')
	$("#game li").removeClass('btn-info')
	$("#messages").text('New Game')
	count = 0
	curr_winner = ''
}


/**
 * Calculate and return the result of whether x or o wins, based on the parameter 'side'.
 * @returns {boolean} Returns whether 'side' wins.

*/
function wins(side) {
	return ($("#one").hasClass(side) && $("#two").hasClass(side) && $("#three").hasClass(side) || $("#four").hasClass(side) && $("#five").hasClass(side) && $("#six").hasClass(side) || $("#seven").hasClass(side) && $("#eight").hasClass(side) && $("#nine").hasClass(side) || $("#one").hasClass(side) && $("#four").hasClass(side) && $("#seven").hasClass(side) || $("#two").hasClass(side) && $("#five").hasClass(side) && $("#eight").hasClass(side) || $("#three").hasClass(side) && $("#six").hasClass(side) && $("#nine").hasClass(side) || $("#one").hasClass(side) && $("#five").hasClass(side) && $("#nine").hasClass(side) || $("#three").hasClass(side) && $("#five").hasClass(side) && $("#seven").hasClass(side))	
}


