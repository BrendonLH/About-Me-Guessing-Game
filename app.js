'use Strict';

// does the author work for a shipping company?
// did the author enlist in 2009?
// true or false : Brendon was dishonerably discharged
// true or false : The Author completed 3 quarters of Community College
// Has the author ever been employed as a security officer?


// var welcomeMsg = prompt('What is your name?'); {
//   alert('Hello! Welcome to my site ' + welcomeMsg + '! Please take the test after reading my Bio to get to know me better!');
// }


//   var workHistory = prompt('Does the Author work for a shipping company?'); {
//     if(workHistory.toLowerCase() === 'no') {
//       alert('good Job!');
//       // console.log("That is the right answer!");
//     }
//     else(alert('Yeah thats wrong!'));
//   }

//   var militaryService = prompt('Did the author enlist in 2009?'); {
//     if(militaryService.toUpperCase() === 'YES') {
//       alert('Yes thats Correct!');
//       // console.log("That is correct!");
//     }
//     else(alert('Nope!Nada!Wrongo!'));
//   }

//   var disCharged = prompt('True or False : Brendon was Dishonerably Discharged?'); {
//     if(disCharged.toLowerCase() === 'false') {
//       alert('Thats Correct again!');
//       // console.log("That is right!");
//     }
//     else(alert('yeah...thats wrong!'));
//   }

//   var completeCollege = prompt('True or false : The author completed 3 quarters of Community College'); {
//     if(completeCollege.toLowerCase() === 'false') {
//       alert('You got it!!');
//       // console.log("That is the answer!");
//     }
//     else(alert('yeah...your not even trying!'));
//   }

//   var employedAs = prompt('Has the author ever been employed as a security officer?'); {
//     if(employedAs.toUpperCase() === 'YES') {
//       alert('Congrats! you payed attention to something!');
//       // console.log("That is the correct answer!");
//     }
//     else(alert('Congrats! You didnt pay attention!'));
//   }

  
  // var userGuess = prompt("What Number on the Top Ten list is Blue on Black by Five Finger Death Punch?");
  // console.log("userGuess: before " + typeof userGuess)
  // userGuess = parseInt(userGuess)
  // console.log("userGuess: after " + typeof userGuess)
  var nameGame = prompt("what are some awesome Corgi names?")
  var corgiAnswers = ['ellie', 'Gizmo', 'einstein', 'Amigo', 'baxter', 'bernie'];

// prompt for Corgi Name guessing game
  for(corgiGuess = 0; corgiGuess < 5; corgiGuess++) {
    if(nameGame.toLowerCase() === 'baxter') {
      alert("Thats a great name!");
    }
  }
  
// prompt for top ten guessing game
  // for(guess = 0; guess < 3;guess++) {
  //   if(userGuess < 4) {
  //     alert("that is too low");
  //     userGuess = prompt("try again!");
      
  //   } else if(userGuess > 4) {
  //     alert("That is too high!");
  //     userGuess = prompt("try lower next time");
      
  //   } if(userGuess === 4) {
  //     alert("thats correct!");
  //     break;
  //   } 
  // }
  // if(guess === 3) {
  //   alert("you have run out of attempts " + welcomeMsg + " the correct answer was 4");
  // }
  // var exitMsg = (alert('It was nice meeting you ' + welcomeMsg + ' Thank you for visiting my page and learning alittle about me!'));
