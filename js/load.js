$(document).ready(function() {
			var question = 0;
			var showData = $('#show-data');
			var showCounter = $('#show-counter');
			var Answers = {};

			$.getJSON('../data/example.json', function(data) {
				var length = data.items.length;
				showCounter.append(question + 1 + " / " + length);
			});


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


				});
			});

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

				});
			});


			$(".survey-button").click(function() {
				var id = this.id;
				Answers[question] = id;

				console.log(Answers);
			});

      function hasAnswer(button, questionNumber, answersObject) {
        if (answersObject.hasOwnProperty(questionNumber)) {
          return true;
        } else {
          return false;
        }
      }

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
