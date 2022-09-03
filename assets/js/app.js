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

document.getElementById("userGivenPinInput").addEventListener('keyup', function() {
    submitBtnEnableDisable();
});

document.getElementById("userPinSubmitBtn").addEventListener('click', function() {
    pinNumberMatcher();
});


function pinNumberMatcher() {
    const generatedPinField = document.getElementById("generatePinInput").value;
    const userGivenPinField = document.getElementById("userGivenPinInput").value;
    const generatedPin = parseInt( document.getElementById("generatePinInput").value );
    const userGivenPin = parseInt( document.getElementById("userGivenPinInput").value );

    if ( generatedPinField === "" ) {
        alert("Please first generate a pin by pressing generate pin button!!!");
    } else if ( userGivenPinField === "" ) {
        alert("You most provide a 4 digit pin to continue!!!");
    } else if ( isNaN( generatedPin ) || isNaN( userGivenPin ) ) {
        alert("Pin number most be in number!!!");
    } else {

        if ( generatedPin === userGivenPin ) {
            document.getElementById("notificationNotMatch").style.display = "none";
            document.getElementById("notificationMatched").style.display = "block";
        } else {
            pinNotMatchedCount();
        }


    }
}


let pinNotMatchedCounted = 0;
function pinNotMatchedCount() {
    document.getElementById("notificationMatched").style.display = "none";
    document.getElementById("notificationNotMatch").style.display = "block";
    document.getElementById("userGivenPinInput").value = '';
    pinNotMatchedCounted++;
    let pinMatchTryLeftElement = document.getElementById("pinMatchTryLeft");
    let pinMatchTryLeft = parseInt( pinMatchTryLeftElement.innerText );
    pinMatchTryLeftElement.innerText = pinMatchTryLeft - 1;

    if ( pinNotMatchedCounted === 3 ) {
        alert( "You've failed to provide the valid pin with 3 attempts. Please wait and try again a few minutes later!!!" );
        document.getElementById("generatePinInput").value = '';
        document.getElementById("generatePinPection").style.pointerEvents = "none";
        document.getElementById("matchPinSection").style.pointerEvents = "none";
    }
}


function userInputPin( newInputKey ) {
    const newInputKeyValue = newInputKey.innerText;
    const userGivenPinInput = document.getElementById("userGivenPinInput");
    const userGivenPinInputValue = document.getElementById("userGivenPinInput").value;
    if ( isNaN( newInputKeyValue ) ) {
        if ( newInputKeyValue === "C" ) {
            userGivenPinInput.value = '';
        } else if ( newInputKeyValue === "X" ) {
            console.log(userGivenPinInputValue)
            userGivenPinInput.value = userGivenPinInputValue.slice( 0, -1 );
        }
    } else if ( userGivenPinInputValue.length !== 4 ) {
         userGivenPinInput.value += newInputKeyValue;
    }

    submitBtnEnableDisable();
}


function submitBtnEnableDisable() {
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