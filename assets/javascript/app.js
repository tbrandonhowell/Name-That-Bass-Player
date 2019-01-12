

// ------------------------------------------------
// create array with objects for each question
// ------------------------------------------------

var questionArray = [

{
    question: "",
    rightAnswer: "Sting",
    allAnswers: [
        "Sting",
        "Bass Player 1",
        "Bass Player 2",
        "Bass Player 3",
    ],
    image: "https://www.telegraph.co.uk/content/dam/music/2017/04/08/stinggrey_trans_NvBQzQNjv4Bqa8QtIqCyJclA1G3zY-Z46i2bz5imSv8JSOjCB29-Fi8.jpg?imwidth=450",
    audioFile: "",
    band: "The Police",
},

{
    question: "",
    rightAnswer: "Phil Lynott",
    allAnswers: [
        "Phil Lynott",
        "Bass Player 1",
        "Bass Player 2",
        "Bass Player 3",
    ],
    image: "https://www.irishtimes.com/polopoly_fs/1.2538498.1455731916!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
    audioFile: "",
    band: "Thin Lizzy",
},

{
    question: "",
    rightAnswer: "Flea",
    allAnswers: [
        "Flea",
        "Bass Player 1",
        "Bass Player 2",
        "Bass Player 3",
    ],
    image: "https://akns-images.eonline.com/eol_images/Entire_Site/201414/rs_560x415-140204165213-1024.flea-rhcp-super-bowl-020414.jpg?fit=inside|900:auto&output-quality=90",
    audioFile: "",
    band: "Red Hot Chili Peppers"
},

]; // close questionArray

console.log(questionArray);
console.log(questionArray[2].wrongAnswer1);

// ------------------------------------------------
// base variables
// ------------------------------------------------

var questIndex; // will increment this after each question
var shuffledQuestions = []; // will be updated with each question to hold its shuffled answers
var finalCorrect = 0; // tally for each game
var finalWrong = 0; // tally for each game
var finalUnanswered = 0; // tally for each game
var printTimer; // realtime timer variable for use during each answer. gets reset with writeScreen()
var defaultQuesTime = 10; // default time (in seconds) for questions
var answerTime = 5000; // how long (in milliseconds) we want to show the answer before moving to next question
var realtimeInterval; // holds the setInterval for use in each question

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
// writeScreen function
// ------------------------------------------------

// Write everything for this question to the screen
// Then we'll use display block/none to change the view with timeout/correct/incorrect

var writeScreen = function () {

    console.log("writeScreen questIndex = " + questIndex);
    console.log(shuffledQuestions);

    // write the bass player image
    $(".playerImg").attr("src", shuffledQuestions[questIndex].Image);

    // write the answers
    $("#answersDiv").empty(); // clear the answersDiv first
    var liveAns = shuffle(shuffledQuestions[questIndex].allAnswers); // shuffle the answers to this question
    for (i=0;i<liveAns.length;i++) {
        var newP = $("<button>"); // create <p>
        newP.text(liveAns[i]);// drop question into <p>
        newP.addClass("answer btn btn-lg btn-block btn-dark"); // add the answer class so we can watch for the button click
        newP.attr("type","button");
        newP.attr("data-value",liveAns[i]); // add data value for answer check logic
        $("#answersDiv").append(newP);// drop <p> into #answersDiv
    }

    // write the stuff for the wrong/right/timeout messages
    $(".correctAns").text(shuffledQuestions[questIndex].rightAnswer); // push the correct answer to the div
    $(".playerImg").attr("src", shuffledQuestions[questIndex].image);// push the larger picture to the div
    $(".bandName").text(shuffledQuestions[questIndex].band); // push the band name to the divs

    // show question and answers divs
    $("#answersDiv").attr("style", "display:block"); 
    $("#questionDiv").attr("style", "display:block"); 

    // hide wrongDiv, rightDiv, timeoutDiv, stats
    $("#wrongDiv").attr("style", "display:none");
    $("#rightDiv").attr("style", "display:none");
    $("#timeoutDiv").attr("style", "display:none");
    $("#stats").attr("style", "display:none");

    // reset and start our internal/timer
    printTimer = defaultQuesTime; // reset printTimer variable to default
    $(".printTimer").text(printTimer); // write printTimer to screen
    realtimeInterval = setInterval(countDown,1000); // fire off the countdown function every second

}

// ------------------------------------------------
// showTimeout function - is called by countDown if printTimer === 0
// ------------------------------------------------

var showTimeout = function() {
        console.log("answer timeout");
        questIndex++; // increment questIndex
        finalUnanswered++; // increment unanswered counter
        $("#answersDiv").attr("style", "display:none"); // hide answers div
        $("#questionDiv").attr("style", "display:block"); // keep questions div up
        $("#timeoutDiv").attr("style", "display:block"); // show timeoutDiv
        // create timeout until the jump to the next question:
        setTimeout(gameOverYet,answerTime);
}




// ------------------------------------------------
// countDown function for interval
// ------------------------------------------------

var countDown = function() {
    printTimer--; // decrement printTimer
    $(".printTimer").text(printTimer); // write printTimer to screen
    if (printTimer === 0) {
        clearInterval(realtimeInterval);
        showTimeout(); 
    }
}


// ------------------------------------------------
// function "start" for starting (and restarting) the game
// ------------------------------------------------


var start = function() {

    console.log("start click captured");

    // set timer to sta

    // reset the right/wrong/unanswered counters
    finalCorrect = 0;
    finalWrong = 0;
    finalUnanswered = 0;

    questIndex = 0; // set to first question
    console.log(questIndex);

    // Update the shuffledQuestions array with the question's answers (and shuffle them, obviously)
    shuffledQuestions = shuffle(questionArray.slice()); // also pulled from https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
    console.log(shuffledQuestions);

    // Hide the start button
    $("#startDiv").attr("style", "display:none");

    // show time div
    $(".timeDiv").attr("style", "display:block");

    // send everything for the question to the DOM
    writeScreen();

};

// ------------------------------------------------
// function to decide if game is over (used in the timeout)
// ------------------------------------------------

var gameOverYet = function() {
    if (questIndex == shuffledQuestions.length) { // this comparison works because we increment questIndex after every answer, so for example, after answering the third question, the questIndex value is 3 (for the 4th, non-existent entry in the array)
        end();
    } else {
        writeScreen();
    }
}   

// ------------------------------------------------
// function "end" for showing final screen w/ scores
// ------------------------------------------------

var end = function() {

    console.log("end function");

    // hide question and answers divs
    $("#answersDiv").attr("style", "display:none"); 
    $("#questionDiv").attr("style", "display:none"); 

    // hide wrongDiv, rightDiv, timeoutDiv
    $("#wrongDiv").attr("style", "display:none");
    $("#rightDiv").attr("style", "display:none");
    $("#timeoutDiv").attr("style", "display:none");
    $(".timeDiv").attr("style", "display:none");

    // load up the stats div

    $("#finalCorrect").text(finalCorrect);
    $("#finalWrong").text(finalWrong);
    $("#finalUnanswered").text(finalUnanswered);

    // display stats div
    $("#stats").attr("style", "display:block");

    // 

};


// ------------------------------------------------
// call "start" when a .startButton is pressed
// ------------------------------------------------


// watch for the start button click event
$(document).on("click", ".startButton", function() { // watch for the click from start or restart

    start();

});



// ------------------------------------------------
// Watch for the answer click and execute logic
// ------------------------------------------------

$(document).on("click", ".answer", function() { // watch for the click


    

    // increment our question:
    
    console.log("questIndex = " + questIndex);
    console.log(shuffledQuestions[questIndex].rightAnswer);

    // capture the answer for this function
    var tempAns = $(this).attr("data-value");
    console.log(tempAns);

    $("#answersDiv").attr("style", "display:none"); // hide answers div
    $("#questionDiv").attr("style", "display:block"); // keep questions div up

    // if tempAns = right answer, then do this
    if (tempAns == shuffledQuestions[questIndex].rightAnswer) {
        console.log("right answer!");
        finalCorrect++;
        $("#rightDiv").attr("style", "display:block"); // show hidden #rightDiv
    // else if tempAns = wrong answer, then do this
    } else {
        console.log("wrong answer");
        finalWrong++;
        $("#wrongDiv").attr("style", "display:block"); // show hidden #wrongDiv
    }

    questIndex++; // otherwise increment the question index

    clearInterval(realtimeInterval); // stop the timer

    // create timeout until the jump to the next question
    setTimeout(gameOverYet,answerTime);

    // TODO: need a timer that gives you five seconds and then moves to the next question
    // taken from https://medium.freecodecamp.org/javascript-timers-everything-you-need-to-know-5f31eaa37162
    // setTimeout(
    //     () => {
    //       writeScreen();
    //     },
    //     1 * 1000
    //   );





});


// ------------------------------------------------
// temp button to go to next question
// ------------------------------------------------

// $(document).on("click", "#next", function() { // watch for the click
//     if (questIndex == shuffledQuestions.length) { // this comparison works because we increment questIndex after every answer, so for example, after answering the third question, the questIndex value is 3 (for the 4th, non-existent entry in the array)
//         end();
//     } else {
//         writeScreen();
//     }
// });