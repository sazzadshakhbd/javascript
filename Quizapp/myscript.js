var questions = [
	{
		question: "HTML stands for?",
		choices: ['Hyper Text Markup Language', 'High Text Markup Language','Hyper Tabular Markup Language', 'None of these'],
		correctAnswer: 0
	},
	{
		question: "which of the following tag is used to mark a begining of paragraph ?",
		choices: ['<TD>', '<br>','<P>', '<TR>'],
		correctAnswer: 2
	},
	{
		question: "From which tag descriptive list starts ?",
		choices: ['<LL>', '<DD>','<DL>', '<DS>'],
		correctAnswer: 2
	},
	{
		question: "Correct HTML tag for the largest heading is",
		choices: ['<head>', '<h6>','<heading>', '<h1>'],
		correctAnswer: 3
	},
	{
		question: "The attribute of <form> tag",
		choices: ['Method', 'Action','Both (a)&(b)', 'None of these'],
		correctAnswer: 2
	},
];

var currentQuestion = 0;
var correctAnswer = 0;
var quizeOver = false;

$(document).ready(function() {
	displayCurrentQuestion();
	$(this).find('.quize-messages').hide();
	$(this).find('.next-button').on('click', function() {
		if(!quizeOver) {
			value = $('input[type="radio"]:checked').val();
			if (value == undefined) {
				$(document).find('.quize-messages').text('Please select an answer');
				$(document).find('.quize-messages').show();
			} else {
				$(document).find('.quize-messages').hide();
				if(value == questions[currentQuestion].correctAnswer) {
					correctAnswer++;
				}
				currentQuestion++;
				if(currentQuestion <questions.length) {
					displayCurrentQuestion();
				} else {
					displayScore();
					$(document).find('.next-button').text('Play Again');
					quizeOver = true;
				}
			}
		} else {
			quizeOver = false;
			$(document).find('.next-button').text('Next Question');
			resetQuize();
			displayCurrentQuestion();
			hideScore();
		}
	})
});