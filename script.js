$(document).ready(function(){
var magic8Ball = {};
magic8Ball.answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

$("#answer").hide();

// define the method
magic8Ball.askQuestion = function(question) {
$("#answer").fadeIn(4000);
// create a random number
var randomNumber = Math.random();

// make the random number between 0 and the number of items in your array
var randomNumberForanswers = randomNumber * this.answers.length;

// round down the number to be a whole number
var randomIndex = Math.floor(randomNumberForanswers);

// use that number to index a random number from the answers array
var answer = this.answers[randomIndex];

$("#answer").text(answer);

console.log(question);
console.log(answer);
};

var onClick = function() {
	var question = prompt("Ask me anything");
	magic8Ball.askQuestion(question);
	$("#8ball").effect( "shake" );
				setTimeout(
    function() {
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    }, 0500);

};

$("#questionButton").click(onClick);


});
