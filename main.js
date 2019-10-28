// const randomNumber =Math.ceil(Math.random() * 10)

 
// var guess = 1; 
      

//    if(inputNumber == randomNumber) 
//    {     
//        alert(`Success! Attempts : ${guess}`); 
//    } 
//    else if(inputNumber > randomNumber) 
//    {     
//        guess++; 
//        alert("Wrong! Try Again!"); 
//    } 
//    else if(guess > 3)
//    {  
//        alert(`Sorry,you failes to guess the number in ${guess} attempts The Number was ${RandomNumber}`)
//    }


let guess = 1;
function guessGame() {

    const randomNumber =Math.ceil(Math.random() * 10)
    const inputNumber = prompt("Guess a number between 1 - 10")
   
    do {
       
        if (randomNumber == inputNumber) {
            alert( `Success, attempts: ${guess}`)
            break;
        } else if (randomNumber != inputNumber ) {
            prompt("Wrong!! Try Again!");
            guess++
        }
    } while (guess != 3){
        alert("To many attempts! the number was " + randomNumber + ". Restart the page");
    };
    
}
guessGame();