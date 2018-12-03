    // create all variables
    var question = new Array();
    var answer = 0;
    var i = 1;
    var scoreCorrect = 0;
    var scoreIncorrect = 0;
    var scoreUnanswered = 0;
    var userChoice = null;
    var number = 16;    //  Set timer counter (total count + 1)     
    var intervalId;

    question[0] = null;
    question[1] = new Array("Normal adult dogs have how many teeth?", "24", "38", "42", "32", 3, "https://cdn130.picsart.com/266990537001202.png?r240x240");
    question[2] = new Array("Which dog breed has a black tongue?", "Husky", "Labrador", "Weimaraner", "Chow chow", 4 ,"https://s-media-cache-ak0.pinimg.com/originals/a8/b2/35/a8b235d794e744c8469de89201a2c442.jpg");
    question[3] = new Array("Through what part of the body do dogs sweat?", "Mouth", "Ears", "Nose", "Paws", 4 ,"https://www.warrenphotographic.co.uk/photography/bigs/41150-Cute-Yellow-Labrador-puppy-lying-white-background.jpg");
    question[4] = new Array("Which dog yodels instead of barks?", "Komondor", "Otterhound", "Basenji", "Basset hound", 3 ,"https://i.pinimg.com/originals/f0/c9/e4/f0c9e47de446d146fe05ad225516e8af.png");
    question[5] = new Array("What is the most common training command taught to dogs?", "Stay", "Beg", "Sit", "Dance", 3 , "https://creaturecomfortstx.com/wp-content/uploads/2014/12/dog-1.png");
    question[6] = new Array("What is the favorite dog breed of the Queen of England?", "Corgi", "Basenji", "Poodle", "Pomeranian", 1 , "http://www.allsmalldogbreeds.com/breeds/pembroke-welsh-corgi.jpg");
    question[7] = new Array("Puppies are delivered how many weeks after conception?", "36", "22", "9", "16", 3, "https://toppng.com/public/uploads/preview/cute-puppies-11538460603fg2ovbz9u0.png");
    question[8] = new Array("What breed of dog is the smallest used in hunting?", "Chihuahua", "Miniature dachshund", "Toy poodle", "Smooth fox terrier", 2 ,"https://www.petbarn.com.au/petspot/wp-content/uploads/2016/08/63.-Miniature-Dachshund1.png" );
    question[9] = new Array("How old was the world’s oldest dog, an Australian cattle hound named Bluey, in human years?", "32", "27", "30", "29", 4 , "https://cdn.petbarn.com.au/petspot/wp-content/uploads/2016/08/66.-Australian-Cattle-Dog.jpg");
    question[10] = new Array("What is the most popular breed of dog, according to the American Kennel Club’s registrations?", "Golden retriever", "Beagle", "German shepherd", "Labrador", 4 , "https://images.wagwalkingweb.com/media/breed/labrador-retriever/appearance/labrador-retriever.png");

    
function newGame() {
// initialize variables
    question = new Array();
    answer = 0;
    i = 1;
    scoreCorrect = 0;
    scoreIncorrect = 0;
    scoreUnanswered = 0;
    userChoice = null;
    number = 16;    //  Set timer counter (total count + 1)     
    
    question[0] = null;
    question[1] = new Array("Normal adult dogs have how many teeth?", "24", "38", "42", "32", 3, "https://cdn130.picsart.com/266990537001202.png?r240x240");
    question[2] = new Array("Which dog breed has a black tongue?", "Husky", "Labrador", "Weimaraner", "Chow chow", 4 ,"https://s-media-cache-ak0.pinimg.com/originals/a8/b2/35/a8b235d794e744c8469de89201a2c442.jpg");
    question[3] = new Array("Through what part of the body do dogs sweat?", "Mouth", "Ears", "Nose", "Paws", 4 ,"https://www.warrenphotographic.co.uk/photography/bigs/41150-Cute-Yellow-Labrador-puppy-lying-white-background.jpg");
    question[4] = new Array("Which dog yodels instead of barks?", "Komondor", "Otterhound", "Basenji", "Basset hound", 3 ,"https://i.pinimg.com/originals/f0/c9/e4/f0c9e47de446d146fe05ad225516e8af.png");
    question[5] = new Array("What is the most common training command taught to dogs?", "Stay", "Beg", "Sit", "Dance", 3 , "https://creaturecomfortstx.com/wp-content/uploads/2014/12/dog-1.png");
    question[6] = new Array("What is the favorite dog breed of the Queen of England?", "Corgi", "Basenji", "Poodle", "Pomeranian", 1 , "http://www.allsmalldogbreeds.com/breeds/pembroke-welsh-corgi.jpg");
    question[7] = new Array("Puppies are delivered how many weeks after conception?", "36", "22", "9", "16", 3, "https://toppng.com/public/uploads/preview/cute-puppies-11538460603fg2ovbz9u0.png");
    question[8] = new Array("What breed of dog is the smallest used in hunting?", "Chihuahua", "Miniature dachshund", "Toy poodle", "Smooth fox terrier", 2 ,"https://www.petbarn.com.au/petspot/wp-content/uploads/2016/08/63.-Miniature-Dachshund1.png" );
    question[9] = new Array("How old was the world’s oldest dog, an Australian cattle hound named Bluey, in human years?", "32", "27", "30", "29", 4 , "https://cdn.petbarn.com.au/petspot/wp-content/uploads/2016/08/66.-Australian-Cattle-Dog.jpg");
    question[10] = new Array("What is the most popular breed of dog, according to the American Kennel Club’s registrations?", "Golden retriever", "Beagle", "German shepherd", "Labrador", 4 , "https://images.wagwalkingweb.com/media/breed/labrador-retriever/appearance/labrador-retriever.png");
    run();
}

// 'check-answer' function. Checks whether user choice is correct or incorrect
function checkAnswer() {
    clearInterval(intervalId);
    if (userChoice === question[i][5]) {
        right();
        intervalId = setInterval(stop, 2000);
    }
    else {
        $("#question-message").html("Nope...Correct answer is");
        wrong();
        intervalId = setInterval(stop, 3000);
    }
}

// 'correct answer' function. Displays message: Correct!
// show picture related to correct answer
function right() {
    $("#choice1").empty();
    $("#choice2").empty();
    $("#choice3").empty();
    $("#choice4").empty();
    $("#question-message").html("Correct!");
    scoreCorrect++;
    i++;
}

// 'incorrect answer' function
// show message with correct answer: The Correct Answer was: <correct answer>
// show picture related to correct answer
function wrong() {
    $("#question-message").html("Nope...Correct answer is");
    showAnswer();
    scoreIncorrect++;
    i++;
}

// 'time is up' function. Runs when timer reaches zero.
// show message with correct answer: The Correct Answer was: <correct answer>
// show picture related to correct answer
function outofTime() {
    $("#question-message").html("Time's up...Correct answer is");
    showAnswer();
    scoreUnanswered++;
    i++;
}

// 'game over' function. Displays game final scores.
function endofGame() {
    $("#show-correct-answer").empty();
    $("#question-message").html("<strong>" + "GAME OVER" + "</strong>");
    $("#timer").empty();
    $("#start-new-game").html("Click Here to Start a New Game");
    $("#start-new-game").on({
        click: function () {
            clearInterval(intervalId);
            intervalId = setInterval(newGame, 100);
            $("#start-new-game").empty();
        },
        mouseover: function () {
            $(this).css("color", "green");
        },
        mouseout: function () {
            $(this).css("color", "black");
        }
    });
    
    $("#show-image").empty();
    $("#choice1").html("Correct Answers: " + scoreCorrect);
    $("#choice2").html("Incorrect Answers: " + scoreIncorrect);
    $("#choice3").html("Unanswered: " + scoreUnanswered);
    $("#choice4").empty();
    i++;
}

function showAnswer() {
    $("#choice1").empty();
    $("#choice2").empty();
    $("#choice3").empty();
    $("#choice4").empty();
    correctAnswer = question[i][5];
    $("#show-correct-answer").html(question[i][correctAnswer]);
    var image = $("<img>");
    image.attr("src", question[i][6]);
    image.width('200px')
    image.height('200px');
    $("#show-image").append(image);
}

function clearAnswer() {
    $("#question-message").empty();
    $("#show-correct-answer").empty();
    $("#show-image").empty();
    $("#choice1").empty();
    $("#choice2").empty();
    $("#choice3").empty();
    $("#choice4").empty();
}


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  Decrement function decrements timer counter
function decrement() {

    //  Decrease number by one.
    number--;

    // display timer count, question and answer choices   
    $("#timer").html("<strong>" + "<span>" + number + "</span>" + "</strong>" + "<span>" + " Seconds" + "</span>");
    $("#question-message").html(question[i][0]);
    $("#choice1").html(question[i][1]);
    $("#choice1").on({
        click: function () {
            userChoice = 1;
            clearInterval(intervalId);
            intervalId = setInterval(checkAnswer, 1000);
        },
        mouseover: function () {
            $(this).css("color", "orange");
        },
        mouseout: function () {
            $(this).css("color", "black");
        }
    });

    $("#choice2").html(question[i][2]);
    $("#choice2").on({
        click: function () {
            userChoice = 2;
            clearInterval(intervalId);
            intervalId = setInterval(checkAnswer, 1000);
        },
        mouseover: function () {
            $(this).css("color", "orange");
        },
        mouseout: function () {
            $(this).css("color", "black");
        }
    });

    $("#choice3").html(question[i][3]);
    $("#choice3").on({
        click: function () {
            userChoice = 3;
            clearInterval(intervalId);
            intervalId = setInterval(checkAnswer, 1000);
        },
        mouseover: function () {
            $(this).css("color", "orange");
        },
        mouseout: function () {
            $(this).css("color", "black");
        }
    });

    $("#choice4").html(question[i][4]);
    $("#choice4").on({
        click: function () {
            userChoice = 4;
            clearInterval(intervalId);
            intervalId = setInterval(checkAnswer, 1000);
        },
        mouseover: function () {
            $(this).css("color", "orange");
        },
        mouseout: function () {
            $(this).css("color", "black");
        }
    });

    //  Once timer number hits zero, the 'out of time' function is called followed by the stop function
    if (number === 0) {
        outofTime();
        clearInterval(intervalId);
        intervalId = setInterval(stop, 3000); // waits 3 seconds before stop function is called
    }
}

//  stop function
function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    if (i < question.length) {    // checks if there are still questions left
        number = 16;    //  Set our number counter to 15.
        intervalId = null;
        clearAnswer();
        run();
    }
    else {
        endofGame();
        clearInterval(intervalId);
    }

}

//  MAIN
alert("Click OK to Start the Trivia Game !!! "); // I ran out of ideas on how to start the game from the DOM, so I created an alert (This is very lame, I know)
                                                 // Ideally I would have wanted to start the game by clicking a button on the DOM
newGame();