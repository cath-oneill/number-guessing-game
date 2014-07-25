(function() {
	var Presentation = function() {
		var secretNumber;
		$('#submit-button').on('click', function (e) {	

		});

		$('#start-game').on('click', function(){	
		    var secretNumber = logic.setSecretNumber();
		    $form.show();
		    $feedback.hide();
		});	
	};//close Presentation
	window.presentation = new Presentation();
})(); //close anonymous function

if 'successMessage'
		      $feedback_text.html("Congrats! You got the correct number!");
		      $form.hide();


		  		$feedback_text.html("Your guess is too high! Guess again.");
		      check_landmine_number(guess);


		  		$feedback_text.html("Your guess is too low! Guess again.");
		      check_landmine_number(guess);
