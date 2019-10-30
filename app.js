"use Strict"

// does the author work for a shipping company?
// did the author enlist in 2009?
// true or false : Brendon was dishonerably discharged
// true or false : The Author completed 3 quarters of Community College
// Has the author ever been employed as a security officer?

function bioTest() {
    var workHistory = prompt("Does the Author work for a shipping company?"); {
        if(workHistory.toLowerCase() == "no") {
            alert("good Job!");
        }
        else(alert("Yeah thats wrong!"));
    }

    var militaryService = prompt("Did the author enlist in 2009?"); {
        if(militaryService.toUpperCase() == "YES") {
            alert("Yes thats Correct!");
        }
        else(alert("Nope!Nada!Wrongo!"));
    }

    var disCharged = prompt("True or False : Brendon was Dishonerably Discharged?"); {
        if(disCharged.toLowerCase() == "false") {
            alert("Thats Correct again!");
        }
        else(alert("yeah...thats wrong!"));
    }

    var completeCollege = prompt("True or false : The author completed 3 quarters of Community College"); {
        if(completeCollege.toLowerCase() == "false") {
            alert("You got it!!");
        }
        else(alert("yeah...your not even trying!"));
    }

    var employedAs = prompt("Has the author ever been employed as a security officer?"); {
        if(employedAs.toUpperCase() == "YES") {
            alert("Congrats you payed attention to something!");
        }
        else(alert("Congrats! You didnt pay attention!"));
    }
}