
//entry point
function getUserInput() {
    let userInput = document.getElementById('userString').value;

    let trimmedText = regularExpression(userInput);

    let revString = reverseTheString(trimmedText);

    PalindromeeChecker(trimmedText, revString);
}






//this function takes the user input and trmis off any non alphabet characters and all whitespace then returns the trimmed string back to entry point function
function regularExpression(stringToTrim) {

    let txt_new = stringToTrim.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    console.log(stringToTrim);

    return txt_new;

}

//this function takes the string that was trimmed by the regular expression function and reverses the string
function reverseTheString(string) {
    
    let startingArray = string.split('');

    let reverseArray = [];

    for (let i = 0; i < startingArray.length; i++) {

        reverseArray.unshift(startingArray[i]);
    }
    return reverseArray.join('');
}

//Palindrome Verifier Function 

function PalindromeeChecker(stringToCheck, reversedString) {

    let message = `Your phrase reversed is ${reversedString}`

    let messageSpot = document.getElementById('resultsGood');

    if (stringToCheck !== reversedString) {

        document.getElementById('alertBad').classList.remove('invisible');
    } else {

        document.getElementById('alertGood').classList.remove('invisible');

    }

    messageSpot.innerHTML = message;
}











