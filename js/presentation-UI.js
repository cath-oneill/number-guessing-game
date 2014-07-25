(function() {
	var Presentation = function() {
		var secretNumber;
		var landmineArray;
		var $form = $('form');
  		var $feedback_text = $('#feedback_text');
  		var $feedback = $('#feedback');
  		var $guess = $('#guess');
  		var $start_button = $('#start-button')
  		var $submit_button = $('#submit-button')

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

		var landmineFeedback = function(currentGuess) {
			var landmineData = logic.checkLandmineNumbers(currentGuess, landmineArray);
			if (landmineData.message === "gameOver") {}
		}

		$submit_button.on('click', function(e) {	
			var currentGuess = +$guess.val();
			var landmineMsg = 
			$feedback_text.text(feedbackMessage(currentGuess));
		    $feedback.show();
		    $guess.val('')

		    e.preventDefault();
		});


		$start_button.on('click', function() {	
		    secretNumber = logic.setSecretNumber();
		    landmineArray = logic.setLandmineNumbers();
		    console.log("Secret number: " + secretNumber);
		    console.log("Landmine numbers: " + landmineArray);
		    $form.show();
		    $feedback.hide();
		    $start_button.hide();
		});	
	};//close Presentation
	window.presentation = Presentation;
	presentation();
})();