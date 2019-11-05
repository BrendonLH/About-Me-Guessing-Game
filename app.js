'use Strict';

// does the author work for a shipping company?
// did the author enlist in 2009?
// true or false : Brendon was dishonerably discharged
// true or false : The Author completed 3 quarters of Community College
// Has the author ever been employed as a security officer?



var scoreBoard = 0;
var welcomeMsg = prompt('What is your name?'); {
  alert('Hello! Welcome to my site ' + welcomeMsg + '! Please take the test after reading my Bio to get to know me better!');
}
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

function questionOne(){
  var workHistory = prompt('Does the Author work for a shipping company?'); {
    if(workHistory.toLowerCase() === 'no') {
      alert('good Job!');
      scoreBoard ++;
      // console.log("That is the right answer!");
    }
    else(alert('Yeah thats wrong!'));
  }
}

function questionTwo(){
  var militaryService = prompt('Did the author enlist in 2009?'); {
    if(militaryService.toUpperCase() === 'YES') {
      alert('Yes thats Correct!');
      scoreBoard ++;
      // console.log("That is correct!");
    }
    else(alert('Nope!Nada!Wrongo!'));
  }
}

function questionThree(){
  var disCharged = prompt('True or False : Brendon was Dishonerably Discharged?'); {
    if(disCharged.toLowerCase() === 'false') {
      alert('Thats Correct again!');
      scoreBoard ++;
      // console.log("That is right!");
    }
    else(alert('yeah...thats wrong!'));
  }
}

function questionFour(){
  var completeCollege = prompt('True or false : The author completed 3 quarters of Community College'); {
    if(completeCollege.toLowerCase() === 'false') {
      alert('You got it!!');
      scoreBoard ++;
      // console.log("That is the answer!");
    }
    else(alert('yeah...your not even trying!'));
  }
}

function questionFive(){
  var employedAs = prompt('Has the author ever been employed as a security officer?'); {
    if(employedAs.toUpperCase() === 'YES') {
      alert('Congrats! you payed attention to something!');
      scoreBoard ++;
      // console.log("That is the correct answer!");
    }
    else(alert('Congrats! You didnt pay attention!'));
  }
}

function questionSix(){
  var userGuess = prompt('What Number on the Top Ten list is Blue on Black by Five Finger Death Punch?');
  console.log('userGuess: before ' + typeof userGuess);
  userGuess = parseInt(userGuess);
  console.log('userGuess: after ' + typeof userGuess);

  // prompt for top ten guessing game
  for(guess = 0; guess < 3;guess++) {
    if(userGuess < 4) {
      alert('that is too low');
      userGuess = prompt('try again!');
    } else if(userGuess > 4) {
      alert('That is too high!');
      userGuess = prompt('try lower next time');

    } if(userGuess === 4) {
      alert('thats correct!');
      scoreBoard ++;
      break;
    }
  }
  if(guess === 3) {
    alert('you have run out of attempts ' + welcomeMsg + ' the correct answer was 4');
  }
}

function questionSeven(){
  var nameGame = prompt('what are some awesome Corgi names? Google for hints.');
  var corgiAnswers = ['ellie', 'gizmo', 'einstein', 'amigo', 'baxter', 'bernie'];
  // prompt for Corgi Name guessing game
  for (var i = 0; i < corgiAnswers.length; i++) {
    // console.log(corgiAnswers[i]);
    if(nameGame === corgiAnswers[0]) {
      alert('Good Job!');
      scoreBoard ++;
      break;
    } else if(nameGame === corgiAnswers[1]) {
      alert('Good Job!');
      scoreBoard ++;
      break;
    } else if(nameGame === corgiAnswers[2]) {
      alert('Great Job!');
      scoreBoard ++;
      break;
    } else if(nameGame === corgiAnswers[3]) {
      alert('That\'s a cool name!');
      scoreBoard ++;
      break;
    } else if(nameGame === corgiAnswers[4]) {
      alert('Good Job!');
      scoreBoard ++;
      break;
    } else if(nameGame === corgiAnswers[5]) {
      alert('Good Job!');
      scoreBoard ++;
      break;
    } else {
      nameGame = prompt ('That is an okay name... I guess, but could you think of an awesome name?');
    }
  }
  alert('These are all of the awesome names of CoRgIs: ' + corgiAnswers);
}



alert('You got ' + scoreBoard + ' out of 7.');

alert('It was nice meeting you ' + welcomeMsg + ' Thank you for visiting my page and learning alittle about me!');

