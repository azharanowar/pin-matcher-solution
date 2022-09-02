document.getElementById("generatePinBtn").addEventListener('click', function() {
    const generatePinInput = document.getElementById("generatePinInput");
    let generatedPinNumber = makeRandomPin();

    if ( generatedPinNumber === undefined ) {
        generatedPinNumber = makeRandomPin();
    }

    generatePinInput.value = generatedPinNumber;
});

function makeRandomPin() {
    const generatePin = Math.round( Math.random() * 10000 ) + '';
    if( generatePin.length === 4 ) {
        return generatePin;
    } else {
        makeRandomPin();
    }
}