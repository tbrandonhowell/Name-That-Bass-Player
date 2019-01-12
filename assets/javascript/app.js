

// ------------------------------------------------
// create array with objects for each question
// ------------------------------------------------

var questionArray = [



{
    question: "",
    rightAnswer: "Sting",
    allAnswers: [
        "Sting",
        "Flea",
        "Punch",
        "Thundercat",
    ],
    image: "http://www.mixdownmag.com.au/sites/default/files/images/spector%20ns-2.jpg",
    audioFile: "assets/sound/police.mp3",
    band: "The Police",
},

{
    question: "",
    rightAnswer: "James Jamerson",
    allAnswers: [
        "James Jamerson",
        "Robert Trujillo",
        "Bob Babbit",
        "Bob Bogle",
    ],
    image: "https://i.pinimg.com/originals/fa/ad/e3/faade3f5fc002b53746fadf068175dad.jpg",
    audioFile: "",
    band: "Funk Brothers",
},

{
    question: "",
    rightAnswer: "Paul McCartney",
    allAnswers: [
        "Paul McCartney",
        "Victor Wooten",
        "Doug Wimbish",
        "Colin Greenwood",
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Paul_McCartney_black_and_white_2010.jpg/1200px-Paul_McCartney_black_and_white_2010.jpg",
    audioFile: "",
    band: "The Beatles",
},

{
    question: "",
    rightAnswer: "Phil Lynott",
    allAnswers: [
        "Phil Lynott",
        "Victor Bailey",
        "Michael Manring",
        "Michael Shuman",
    ],
    image: "https://i2-prod.mirror.co.uk/incoming/article7495431.ece/ALTERNATES/s615b/Phil-Lynott-of-Thin-Lizzie-singing-on-stage.jpg",
    audioFile: "assets/sound/thin_lizzy.mp3",
    band: "Thin Lizzy",
},

{
    question: "",
    rightAnswer: "Bootsy Collins",
    allAnswers: [
        "Bootsy Collins",
        "Chris Squire",
        "Dee Murray",
        "Michael Ivins",
    ],
    image: "https://i.pinimg.com/originals/69/b1/87/69b187a6fe9c940931bf86c3b102ec99.jpg",
    audioFile: "",
    band: "Parliament-Funkadelic",
},

{
    question: "",
    rightAnswer: "John Paul Jones",
    allAnswers: [
        "John Paul Jones",
        "Jack Bruce",
        "Jonas Hellborg",
        "Nick Oliveri",
    ],
    image: "http://www.mixdownmag.com.au/sites/default/files/images/jpjjazzbass.jpg",
    audioFile: "",
    band: "Led Zeppelin",
},

{
    question: "",
    rightAnswer: "Lemmy Kilmister",
    allAnswers: [
        "Lemmy Kilmister",
        "Geezer Butler",
        "Bill Black",
        "Roger Waters",
    ],
    image: "https://i.pinimg.com/originals/f2/6a/1a/f26a1ad6b6a9e0d97cb84514adabbcb5.jpg",
    audioFile: "",
    band: "Motorhead",
},

{
    question: "",
    rightAnswer: "Steve Harris",
    allAnswers: [
        "Steve Harris",
        "John Deacon",
        "Bobby Vega",
        "Armistead Burwell Smith IV",
    ],
    image: "https://i.pinimg.com/originals/79/0e/a4/790ea450f521445267859b5f96847cc8.jpg",
    audioFile: "",
    band: "Iron Maiden",
},

{
    question: "",
    rightAnswer: "Peter Hook",
    allAnswers: [
        "Peter Hook",
        "Donald Dunn",
        "Jeff Berlin",
        "Troy Sanders",
    ],
    image: "https://ssl.c.photoshelter.com/img-get2/I0000CkC7sTCZRbc/fit=1000x750/Peter-Hook-of-New-Order-performing-in-Bsoton.jpg",
    audioFile: "assets/sound/joy_division.mp3",
    band: "Joy Division & New Order",
},

{
    question: "",
    rightAnswer: "Cliff Burton",
    allAnswers: [
        "Cliff Burton",
        "Billy Sheehan",
        "Berry Oakley",
        "Mick Karn",
    ],
    image: "https://static1.squarespace.com/static/54481c8fe4b0a9431d5d27fe/t/550206efe4b0e7855b512923/1426196207997/",
    audioFile: "",
    band: "Metallica",
},

{
    question: "",
    rightAnswer: "Geddy Lee",
    allAnswers: [
        "Geddy Lee",
        "Tony Levin",
        "Les Claypool",
        "Joe Osborn",
    ],
    image: "https://i0.wp.com/www.notreble.com/wp-content/uploads/2018/12/Geddy-Lee.jpg?resize=1280%2C960&ssl=1",
    audioFile: "",
    band: "Rush",
},

{
    question: "",
    rightAnswer: "Flea",
    allAnswers: [
        "Flea",
        "Lice",
        "Tick",
        "Ant",
    ],
    image: "https://s3.amazonaws.com/images.charitybuzz.com/images/3597/original.jpg?1384538220",
    audioFile: "assets/sound/rhcp.mp3",
    band: "Red Hot Chili Peppers"
},

{
    question: "",
    rightAnswer: "Jaco Pastorius",
    allAnswers: [
        "Jaco Pastorius",
        "Bernand Edwards",
        "Verdine White",
        "Robert DeLeo",
    ],
    image: "https://i.pinimg.com/originals/d1/39/6d/d1396d2d8a287653804c67b3231abe4c.jpg",
    audioFile: "",
    band: "Weather Report, Etc.",
},

{
    question: "",
    rightAnswer: "Krist Novoselic",
    allAnswers: [
        "Krist Novoselic",
        "Pino Palladino",
        "Will Lee",
        "Brian Ritchie",
    ],
    image: "https://i.pinimg.com/originals/cb/0c/7c/cb0c7c2e2ab04840a7e15a9502313706.jpg",
    audioFile: "",
    band: "Nirvana",
},

{
    question: "",
    rightAnswer: "Larry Graham",
    allAnswers: [
        "Larry Graham",
        "Stu Hamm",
        "Jack Cassidy",
        "Robert Been",
    ],
    image: "http://apps.startribune.com/blogs/user_images/jonbream_1453336055_gcs.jpg",
    audioFile: "",
    band: "Sly and the Family Stone",
},

{
    question: "",
    rightAnswer: "John Entwistle",
    allAnswers: [
        "John Entwistle",
        "Nathan East",
        "John Patitucci",
        "Timothy Schmit",
    ],
    image: "https://i.pinimg.com/originals/65/67/5d/65675d4d9a2ecd814e0a2d692df4d95d.jpg",
    audioFile: "",
    band: "The Who",
},

{
    question: "",
    rightAnswer: "Stanley Clarke",
    allAnswers: [
        "Stanley Clarke",
        "Louis Johnson",
        "Rocco Prestia",
        "Howie Epstein",
    ],
    image: "https://media.gettyimages.com/photos/stanley-clarke-performs-with-the-new-barbarians-at-oakland-coliseum-picture-id98699584?b=1&k=6&m=98699584&s=612x612&w=0&h=Gou-TdLJjvTKZRmrvq9dpJ88NQKkEKo1pksaDyXZrzI=",
    audioFile: "",
    band: "Solo",
},

{
    question: "",
    rightAnswer: "Leland Sklar",
    allAnswers: [
        "Leland Sklar",
        "Mike Watt",
        "Chuck Rainey",
        "Michael Anthony",
    ],
    image: "http://static1.squarespace.com/static/591b2c925016e1568ef59428/591bc36437c581f0802c3f93/5924cf4a414fb5f591f1ccdf/1537775848124/leland-sklar.jpg?format=1500w",
    audioFile: "",
    band: "Session Musician",
},

{
    question: "",
    rightAnswer: "Justin Chancellor",
    allAnswers: [
        "Justin Chancellor",
        "Duff McKagan",
        "Phil Lesh",
        "Marcus Miller",
    ],
    image: "https://www.bassplayer.com/.image/t_share/MTUzNjY4MzAwNDk3MzY0NzIx/image-placeholder-title.jpg",
    audioFile: "",
    band: "Tool",
},

{
    question: "",
    rightAnswer: "Brandon Howell",
    allAnswers: [
        "Brandon Howell",
        "Chris Wolstenholme",
        "Anthony Jackson",
        "Carlos Dengler",
    ],
    image: "assets/images/howell.jpg",
    audioFile: "",
    band: "Looking for a band. You need a bass player?",
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
var answerTime = 1000; // how long (in milliseconds) we want to show the answer before moving to next question
var realtimeInterval; // holds the setInterval for use in each question
var audio; // holder for our mp3 clues

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

    // write the hint
    var newHint = $("<button>");
        newHint.text("I need a hint!");
        newHint.addClass("hint btn btn-lg btn-block btn-success");
        $("#answersDiv").append(newHint);

    // select the audio file to play
    console.log(shuffledQuestions[questIndex].audioFile);
    audio = new Audio(shuffledQuestions[questIndex].audioFile);

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
        audio.pause(); // pause the audio if it had been started
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

    // pause the audio if it had been started
    audio.pause();

});


// ------------------------------------------------
// watch for the hint click
// ------------------------------------------------

$(document).on("click", ".hint", function() { // watch for the click
    console.log("hint click");
    audio.play();

});

