(function () {
	var Logic = function() {
		var secretNumber;

		this.makeSecretNumber = function () {
  			secretNumber = parseInt(Math.random() * 100, 10) + 1;
		};

		this.checkGuessVsSecret = function (currentGuess) {
		    if (currentGuess == secretNumber) {
		    	return "successMessage";
		    } else if (currentGuess > secretNumber) {
		    	return 'tooHighMessage';
		  	} else if (currentGuess < secretNumber) {
		  		return 'tooLowMessage';
		  	}  else {
		  		alert("Please enter only numbers!");
		  	};
		}; // end checkGuessVsSecret

	}; // end Logic
}); //end anonymous function