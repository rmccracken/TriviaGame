alert("Welcome to the Quiz!");
// variable for current question
var currentQuestion = 0;
// variable to hold corrent answer count
var correctA = 0;
// variable to hold incorrect answer count
var incorrectA = 0;
// variable to hold the unanswered questions
var unanswered = 0;
// Holds questions, choices, and answers
var questions = [{
	"question": "Who's on First",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "1"
}, {
	"question": "What's on second",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "2"
}, {
	"question": "Who's on third",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "3"
}, {
	"question": "Who's at bat",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "4"
}, {
	"question": "Who's on First",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "5"
}, {
	"question": "Who's at bat",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "6"
}, {
	"question": "Why is this still going",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "7"
}, {
	"question": "Where are we",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "8"
}, {
	"question": "is this thing over",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "9"
}, {
	"question": "yes it is.",
	"choice1": "who",
	"choice2": "what",
	"choice3": "when",
	"choice4": "where",
	"answer": "1"
}];
var totalQuestions = questions.length;
// sets timer to  20 
var timer = 20;
// variable that will  contdown timer
var timerCount;

var divUpdate = function(){
	$("#finished").hide();
	$("#correctAnswers").hide();
	$("#incorrectAnswers").hide();
	$("#unAnswered").hide();
}
// sets up countdown function to go down by one second
function run() {
	timerCount = setInterval(countdown, 1000);
}
// actual countdown function
function countdown(){
	timer--;

	// connecting to html to show timer
	$("#timer").html("<h3>" + timer + "</h3>");

	if (timer === 0) {
		stop();
		alert("Time's Up!");
	}
}
// 
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

// var container = $("#container");
// var questionView = $("#question");
// var choice1 = $("#choice1");
// var choice2 = $("#choice2");
// var choice3 = $("#choice3");
// var choice4 = $("#choice4");

// function to pull info from questions var
function loadQuestion(questionIndex){
	var i = questions[questionIndex];
	questionView.textContent = (questionIndex + 1) +": " + i.question;
	choice1.textContent = i.choice1;
	choice2.textContent = i.choice2;
	choice3.textContent = i.choice3;
	choice4.textContent = i.choice4;
};

var nextQuestion = function(){
	var selectedChoice = $("input[type=radio]:checked");
	// does each radio button = its selected choice
	console.log(selectedChoice);
	var answer = selectedChoice.value;
	if (questions[currentQuestion].answer === answer){
		correctA++;
		// console.log(correctA);
	}
	// // else if (questions[currentQuestion].answer !== answer){
	// 	incorreectA++;
	// 	// console.log(incorreectA);
	// }
	selectedChoice.checked = false;
	currentQuestion++;
	if (currentQuestion == totalQuestions - 1){
		submit.textContent =  "submit";
	}
	if(currentQuestion == totalQuestions){
		$(".container").empty();
		$("#finished").append("Quiz Complete");
		$("#correctAnswers").append(correctA);
		$("incorrectAnswers").append(incorrectA);
		$("#unAnswered").append(unanswered);


	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);