function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin() {
  const pin = getPin();
  document.getElementById('display-pin').value = pin;
}

// "calc-body" part
document.getElementById("key-pad").addEventListener('click', function(event){
    const number = event.target.innerText;
    const calculatorInput =  document.getElementById('display');
    if(isNaN(number)){
     if(number == 'C'){
         calculatorInput.value= '';
     }
    }

    else{
    const previousNumber = calculatorInput.value;
    const newNumber = previousNumber + number;
    calculatorInput.value = newNumber;
    } 
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const checkPin = document.getElementById('display').value;
    const Matched = document.getElementById('matched');
    const notMatched = document.getElementById('not-matched');

    if(pin == checkPin){
       Matched.style.display = "block";
       notMatched.style.display = "none";
    }

    else{
        notMatched.style.display = "block";
        matched.style.display = "none";
    }
}