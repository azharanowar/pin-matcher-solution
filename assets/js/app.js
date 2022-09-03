document.getElementById("generatePinBtn").addEventListener('click', function() {
    const generatePinInput = document.getElementById("generatePinInput");
    let generatedPinNumber = makeRandomPin();

    if ( generatedPinNumber === undefined ) {
        generatedPinNumber = makeRandomPin();
    }

    generatePinInput.value = generatedPinNumber;
});


document.getElementById("inputKeysSection").addEventListener('click', function( event ) {

    userInputPin( event.target );
    
});


function userInputPin( newInputKey ) {
    const newInputKeyValue = newInputKey.innerText;
    const userGivenPinInput = document.getElementById("userGivenPinInput");
    const userGivenPinInputValue = document.getElementById("userGivenPinInput").value;
    if( newInputKey.classList.contains("number-keys") ) {
        if ( userGivenPinInputValue.length !== 4 ) {
            userGivenPinInput.value += newInputKeyValue;
        }
    } else if ( newInputKeyValue === "C" ) {
        userGivenPinInput.value = '';
    } else if ( newInputKeyValue === "X" ) {
        console.log(userGivenPinInputValue)
        userGivenPinInput.value = userGivenPinInputValue.slice( 0, -1 );
    }

    if ( userGivenPinInput.value.length === 4 ) {
        document.getElementById("userPinSubmitBtn").disabled = false;
    } else {
        document.getElementById("userPinSubmitBtn").disabled = true;
    }
}


function makeRandomPin() {
    const generatePin = Math.round( Math.random() * 10000 ) + '';
    if( generatePin.length === 4 ) {
        return generatePin;
    } else {
        makeRandomPin();
    }
}