function getValues() {
    let inputString = document.getElementById('userString').value;

    if(inputString != null) {
        let result = checkForPalindrome();
        displayResults(result);
    } else {
        
    }

}

function checkForPalindrome(inputString) {
    inputString = inputString.toLowerCase();
    inputString.replace(" ", "");
    let reverseString = "";

    for (let i = inputString.length - 1; i >=  0; i--) {
        reverseString += inputString[i];


    }


    if (inputString == reverseString) {
        return true;
    } else { 
        return false;
    }
}

function displayResults(result) {

    let alert = document.getElementById('alert');
    alert.classList.remove('alert-danger')
    alert.classList.remove('alert-success')

    let messageElement = document.getElementById('message');

    
        if (result == true) {
            alert.classList.add('alert-success')
      
            messageElement.textContent = "Congrats! It's a palindrome!";
        } else {
            alert.classList.add('alert-danger')

            messageElement.textContent = "Oh no! It's not a palindrome!";

        }

        alert.classList.remove('invisible')
}









