if 'successMessage'
		      $feedback_text.html("Congrats! You got the correct number!");
		      $form.hide();


		  		$feedback_text.html("Your guess is too high! Guess again.");
		      check_landmine_number(guess);


		  		$feedback_text.html("Your guess is too low! Guess again.");
		      check_landmine_number(guess);
