document.getElementById("generatePinBtn").addEventListener('click', function() {
    const generatePinInput = document.getElementById("generatePinInput");
    let generatedPinNumber = makeRandomPin();
    
    if ( generatedPinNumber === undefined ) {
        console.log(generatedPinNumber)
        generatedPinNumber = makeRandomPin();
    }

    generatePinInput.value = generatedPinNumber;
});

function makeRandomPin() {
    const generatePin = Math.round( Math.random() * 10000 ) + '';
    if( generatePin.length !== 4 ) {
        makeRandomPin();
    } else {
        return parseInt( generatePin );
    }
}        