(function () {
	var BusinessLogic = function() {

		this.setSecretNumber = function () {
  			return parseInt(Math.random() * 100, 10) + 1;
		};

		this.setLandmineNumbers = function() {
			var landmineArray = [];
			for (var i = 0; i < 3; i++) {
      			landmineArray[i] = parseInt(Math.random() * 100, 10) + 1; 
    		};
    		return landmineArray;
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


	}; // end Logic

	window.logic = new BusinessLogic();
})(); //end anonymous function