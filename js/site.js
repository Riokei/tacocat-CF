// get the user input
function getString() {
    //Make sure the alert is invisible.
    document.getElementById("alert").classList.add("invisible");
    //I had to use a variable per line which I'm not sure is correct but it wouldn't work without it.
    //So uStr takes the user entered string.
    
    let userString = document.getElementById("userString").value;

    //Then I convert it to lower case and make it lowStr
    userString = userString.toLowerCase();

    //Then finally I pump it back into userString like I had intended and strip the spaces and special characters. 
    userString = userString.replace(/[^a-zA-Z0-9]/g, '');

    //Here I call the reverse string function and use it on userString.
    let revString = reverseString(userString);
    
    //And here I use the displayString to display the now reversed string.
    displayString(revString);
    //Reverse it
    function reverseString() {
        let revString = [];
        for (let index = userString.length - 1 ; index >= 0 ; index--) {
            revString += userString[index];
            
        }
        return revString
    }
    //compare the two
    // display it
    function displayString() {
        //Is it a palindrome?
        if (revString == userString) {
            document.getElementById("head-msg").innerHTML = `Well done! You entered a palindrome!`;
        }
        //If it isn't then...
        else if (revString != userString) {
            document.getElementById("head-msg").innerHTML = `Your entered string is not a palindrome.`
        }
        //Pump the result into the p tag.
        document.getElementById("msg").innerHTML = `Reversed string is: ${revString}`;
        //Turn the alert box back on
        document.getElementById("alert").classList.remove("invisible");
    }


    
}


