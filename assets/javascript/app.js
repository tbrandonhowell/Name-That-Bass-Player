

// ------------------------------------------------
// create array with objects for each question
// ------------------------------------------------

var questionArray = [

{
    question: "How many pickups does the Fender Stu Hamm Urge Bass Have?",
    rightAnswer: "3",
    allAnswers: [
        1,
        2,
        3,
        4
    ],
    answerStatus: "unanswered",
    image: "assets/images/urge_bass.jpg",
    smallImage: "https://picsum.photos/200/300",
    audioFile: "",
},

{
    question: "In what year did the Fender Precision Bass debut?",
    rightAnswer: "1951",
    allAnswers: [
        "1951",
        "1947",
        "1962",
        "1957"
    ],
    answerStatus: "unanswered",
    image: "assets/images/precision_bass.jpg",
    smallImage: "https://picsum.photos/200/300",
    audioFile: "",
},

{
    question: "Why did Leo Fender name his first bass the 'Precision' Bass?",
    rightAnswer: "The frets allowed for more precise fingering of notes.",
    allAnswers: [
        "The frets allowed for more precise fingering of notes.",
        "Fender's advanced production methods were more precise.",
        "The newly introduced tuner design allowed for better tuning precision.",
        "Fender was competing against the Gibson 'Accu Bass'.",
    ],
    answerStatus: "unanswered",
    image: "assets/images/precision_fretboard.jpg",
    smallImage: "https://picsum.photos/200/300",
    audioFile: "",
},

]; // close questionArray

console.log(questionArray);
console.log(questionArray[2].wrongAnswer1);

// ------------------------------------------------
// base variables
// ------------------------------------------------

var questIndex; // will increment this after each question
var shuffledQuestions = []; // will be updated with each question to hold its shuffled answers

// ------------------------------------------------
// randomizing functions
// ------------------------------------------------

// array shuffle function:

// https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
// /**
//  * Randomly shuffle an array
//  * https://stackoverflow.com/a/2450976/1293256
//  * @param  {Array} array The array to shuffle
//  * @return {String}      The first item in the shuffled array
//  */

var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

// ------------------------------------------------
// other functions
// ------------------------------------------------

// Write everything for this question to the screen
// Then we'll use display block/none to change the view with timeout/correct/incorrect

var writeScreen = function () {

    // write the question
    var newP = $("<p>"); // create <p>
    newP.text(shuffledQuestions[questIndex].question);// drop question into <p>
    $("#questionDiv").html(newP);// drop <p> into #questionDiv

    // write the small image
    // TODO: need to pull in the smaller image for the guess

    // write the answers
    // TODO: needs to have its data values added for the game logic
    // TODO: also need to add a class that we can look for with an onclick
    var liveAns = shuffle(shuffledQuestions[questIndex].allAnswers); // shuffle the answers to this question
    for (i=0;i<liveAns.length;i++) {
        var newP = $("<p>"); // create <p>
        newP.text(liveAns[i]);// drop question into <p>
        $("#answersDiv").append(newP);// drop <p> into #answersDiv
    }

    // write the stuff for the wrong/right/timeout messages
    $(".correctAns").text(shuffledQuestions[questIndex].rightAnswer); // push the correct answer to the div
    $(".largeImg").attr("src", shuffledQuestions[questIndex].image);// push the larger picture to the div

}




// ------------------------------------------------
// intiate game when user presses start
// ------------------------------------------------

// watch for the start button click event
$("#startDiv").on("click", "#startButton", function() { // watch for the click

    console.log("start click captured");

    questIndex = 1; // set to first question
    console.log(questIndex);

    // Update the shuffledQuestions array with the question's answers (and shuffle them, obviously)
    shuffledQuestions = shuffle(questionArray.slice()); // also pulled from https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
    console.log(shuffledQuestions);

    // send everything to the DOM
    writeScreen();

    // Write the first question to the screen
    // <p class="question">Question goes here.</p>
    // <p class="answer" value="1">Answer 1</p>



});




// NEED TO CREATE THE CODE TO CREATE THE DIV WITH THE ANSWERS


// Watch for the answer click

$(document).on("click", ".answer", function() { // watch for the click

    console.log($(this).attr("value"));

});