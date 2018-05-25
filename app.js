function calculateRGB() {
    const hexValue = document.getElementById("hex-input").value;

    // WRITE YOUR CODE HERE
    let redValue = 0;
    let blueValue = 0;
    let greenValue = 0;


    let redHexValue =hexValue.substring(0, 2);
    console.log(redHexValue);
    let blueHexValue = hexValue.substring(2, 4);
    console.log(blueHexValue);
    let greenHexValue = hexValue.substring(4, 6);
    console.log(greenHexValue); 

    redValue = parseInt(redHexValue, 16);
    blueValue = parseInt(blueHexValue, 16);
    greenValue = parseInt(greenHexValue, 16);

    // DO NOT DELETE BELOW
    document.getElementById("rgb-value").value = redValue + ", " + blueValue + ", " + greenValue;
	document.body.style.backgroundColor = "#" + hexValue;

}