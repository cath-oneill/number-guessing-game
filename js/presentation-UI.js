(function() {
	var Presentation = function() {
		var secretNumber;
		var $form = $('form');
  		var $feedback_text = $('#feedback_text');
  		var $feedback = $('#feedback');
  		var $guess = $('#guess');

		var feedbackMessage = function(currentGuess) {
			var message = logic.checkGuessVsSecret(currentGuess, secretNumber);
			if (message === "successMessage") {
				return "Congrats! You got the correct number!";
				
			} else if (message === "tooHighMessage") {
				return "Your guess is too high! Guess again.";
			} else if (message === "tooLowMessage") {
				return "Your guess is too low! Guess again.";
			} else if (message === "incorrectEntry") {
				return "Try again. Your entry was invalid. Please enter a number between 1 and 100.";
			};
		};

		$('#submit-button').on('click', function(e) {	
			var currentGuess = +$guess.val();
			$feedback_text.text(feedbackMessage(currentGuess));
		    $feedback.show();
		    $guess.val('')
		    e.preventDefault();
		});



		$('#start-button').on('click', function() {	
		    secretNumber = logic.setSecretNumber();
		    console.log("Secret number: " + secretNumber);
		    $form.show();
		    $feedback.hide();
		});	
	};//close Presentation
	window.presentation = Presentation;
	presentation();
})();