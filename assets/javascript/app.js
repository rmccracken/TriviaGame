// condences former block of code var questions
var questionBuilder = function(question, choice1, choice2, choice3, choice4, answer){
	return {
	"question": question,
	"choice1":  choice1,
	"choice2":  choice2,
	"choice3": 	choice3,
	"choice4": 	choice4,
	"answer": 	answer
	};
};
// actual questions
var getQuestions = function(){
	return [
	questionBuilder("Who was the first actor to play James Bond?", "Roger Moore", "Pierce Brosnen", "Sean Connery", "Timmothy Dalton", "3"),
	questionBuilder("What was the video game made based on a Bond film?", "Goldfinger", "GoldenEye", "Skyrim", "Casino Royale", "2"),
	questionBuilder("How many actors have played in Bond Films", "6", "7", "9", "12", "1"),
	questionBuilder("What does the 'double-0' stand for?", "License to travel without a passport", "License to Kill", "Take cars without asking", "License to cary firearms", "2"),
	questionBuilder("Who is 007's secretary?", "Desmond", "M", "Q", "Moneyypenny", "4"),
	questionBuilder("What is the name of the first Bond film?", "Dr. No", "Goldfinger", "Thunderball", "The Man with the Golden Gun", "2"),
	questionBuilder("Who had the shortest run as James Bond 007?", "George Lazenby", "Roger Moore", "Sean Bean", "Daniel Craig", "1"),
	questionBuilder("What is 007's car of choice?", "Ford", "Mercedes-Benz", "Jagguar", "Ashton Martin", "4"),
	questionBuilder("Who is James Bond's #1 contact in America?", "Walter White", "Felix Leiter", "Jim Fanning", "Jimmy Fallon", "2"),
	questionBuilder("James Bond is a character based on what author's writings?", "Ian Fleming", "Robert Frost", "George orwell", "George R.R. Martin", "1")];
};

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var questions = getQuestions();
var totalQuestions = questions.length;

var timer = 120;
var timerCount;
// hides divs for later
var divUpdate = function(){
	$("#finished").hide();
	$("#correctAnswers").hide();
	$("#incorrectAnswers").hide();
	$("#unAnswered").hide();
}
// sets up countdown 
function run() {
	timerCount = setInterval(countdown, 1000);
}

function countdown(){
	timer--;

	// connecting to html to show timer
	$("#timer").html("<h3>" + timer + "</h3>");
// Stops  timer
	if (timer === 0) {
		stop();
		showSummary();
		alert("Time's Up!");
	}
}

// stop function
function stop() {
	clearInterval(timerCount);
}
run();
// variables to put content into 
var questionView = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var nextButton = document.getElementById('nextButton');

// function to pull info from questions var
function loadQuestion(questionIndex){
	var i = questions[questionIndex];
	questionView.textContent = (questionIndex + 1) +": " + i.question;
	choice1.textContent = i.choice1;
	choice2.textContent = i.choice2;
	choice3.textContent = i.choice3;
	choice4.textContent = i.choice4;
};
// used to move to next question
var nextQuestion = function(){
	var selectedChoice = $("input[type=radio]:checked");

	console.log(selectedChoice);
	var userAnswer = selectedChoice.val();
		selectedChoice.prop('checked', false);

	if (userAnswer == undefined){
		unanswered++;
	}

	else {
		if (questions[currentQuestion].answer == userAnswer){
		correctAnswers++;
		}
		
		else {
			incorrectAnswers++}
		}
		// changes ma button to submit
	currentQuestion++;
	if (currentQuestion == totalQuestions - 1){
		submit.textContent =  "submit";
	}

	if(currentQuestion == totalQuestions){
		showSummary();
	}

	else {
		loadQuestion(currentQuestion);
	}

}
// removes questions adds Final Summary
var showSummary = function(){
	$(".container").empty();
		$("#finished").append("Quiz Complete");
		$("#correctAnswers").append("Correct Answers: " + correctAnswers);
		$("#incorrectAnswers").append("Incorrect Answers: " + incorrectAnswers);
		$("#unAnswered").append("Unanswered Questions: " + unanswered);
}

loadQuestion(currentQuestion);
