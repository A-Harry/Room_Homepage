// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

var options ={
    keyNavigation: true,
    fadeStepWhenSkipped: false,
    // autoPlay: true,
    // autoPlayInterval:3000,
}

// Launch Sequence on the element, and with theoptions we specified above
var mySequence = sequence(sequenceElement, options);
