(function () {
	var BusinessLogic = function() {

		this.setSecretNumber = function () {
  			return parseInt(Math.random() * 100, 10) + 1;
		};

		this.checkValidEntry = function (currentGuess) {
			if (isNaN(currentGuess)) {
				return false;
			} else if (currentGuess < 1 || currentGuess > 100) {
				return false;
			} else {
				return true;
			};
		};

		this.checkGuessVsSecret = function (currentGuess, secretNumber) {
			if (this.checkValidEntry(currentGuess) === false) {
				return "incorrectEntry";
			} else if (currentGuess == secretNumber) {
		    	return "successMessage";
		    } else if (currentGuess > secretNumber) {
		    	return 'tooHighMessage';
		  	} else if (currentGuess < secretNumber) {
		  		return 'tooLowMessage';
		  	};
		}; // end checkGuessVsSecret

		this.startGame = function() {

		};

	}; // end Logic

	window.logic = new BusinessLogic();
})(); //end anonymous function