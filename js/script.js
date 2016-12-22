$(document).ready(function() {
			var question = 0;
			var showData = $('#show-data');
			var showCounter = $('#show-counter');
			var Answers = {};
			var rightArrow = $(".right-arrow");
			var leftArrow = $(".left-arrow");

			// GET call to the JSON file to retrieve number of questions
			$.getJSON('../data/example.json', function(data) {
				var length = data.items.length;
				showCounter.append(question + 1 + " / " + length);
			});

			// Disable the back button if it's the first question
      if(question == 0) {
        $('#prev-data').prop('disabled', true);
      }

			// To be sure that just 1 answer is selected
	    $(".right-container > button").click(function() {
	        $(".right-container").find(".blue").removeClass("blue");

	        $(this).toggleClass("blue");

	        $(rightArrow).removeAttr("disabled");
	        $(rightArrow).addClass("blue");

	    });


			// Manage click events on next button
			$('#next-data').click(function() {
				question++;
				$.getJSON('../data/example.json', function(data) {
					var items = data.items[question].paragraph;
					var length = data.items.length;

					var items = data.items[question].paragraph;
					var length = data.items.length;

					showData.empty();
					showData.append(items);

					showCounter.empty();
					showCounter.append(question + 1 + " / " + length);

					$(".right-container").find(".blue").removeClass("blue");

					$('#next-data').removeClass("blue");
					$('#next-data').prop('disabled', true);

          if (hasAnswer(this, question, Answers) == true) {
            checkAnswer(this, question, Answers);
            $('#next-data').prop('disabled', false);
          }

          if(question == 0) {
            $('#prev-data').prop('disabled', true);
          } else {
            $('#prev-data').prop('disabled', false);
          }

				});
			});

			// Manage click events on back button
			$('#prev-data').click(function() {
				question--;
				$.getJSON('../data/example.json', function(data) {
					var items = data.items[question].paragraph;
					var length = data.items.length;

					showData.empty();
					showData.append(items);

					showCounter.empty();
					showCounter.append(question + 1 + " / " + length);

					$(".right-container").find(".blue").removeClass("blue");
					$('#prev-data').removeClass("blue");

          if (hasAnswer(this, question, Answers) == true) {
            checkAnswer(this, question, Answers);
            $('#next-data').prop('disabled', false);
          }

          if(question == 0) {
            $('#prev-data').prop('disabled', true);
          } else {
            $('#prev-data').prop('disabled', false);
          }

				});
			});


			// Insert the answer in an object
			$(".survey-button").click(function() {
				var id = this.id;
				Answers[question] = id;

				console.log(Answers);
			});

			// Function to check if the answer object contains an answer for that question
      function hasAnswer(button, questionNumber, answersObject) {
        if (answersObject.hasOwnProperty(questionNumber)) {
          return true;
        } else {
          return false;
        }
      }

			// Function to check which answer was previously selected
      function checkAnswer(button, questionNumber, answersObject) {
				var id = button.id;

				if (answersObject.hasOwnProperty(questionNumber)) {
          var checkedButton = answersObject[questionNumber];

					console.log("Question: " + questionNumber + " ==> " + answersObject[questionNumber]);
					$("#"+checkedButton).addClass("blue");

          return true;
				} else {

          return false;
        }


				console.log(Answers);
			}
    });
