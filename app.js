function calculateRGB() {
    const hexValue = document.getElementById("hex-input").value;
    console.log(hexValue);

    // WRITE YOUR CODE HERE
    let redValue = 0;
    let blueValue = 0;
    let greenValue = 0;



    // DO NOT DELETE BELOW
    document.getElementById("rgb-value").value = redValue + ", " + blueValue + ", " + greenValue;
	document.body.style.backgroundColor = "#" + hexValue;

}