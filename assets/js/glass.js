// Initializing events listener for various range bars ,basicaly the customizing range bars.
document.querySelector("#blur").addEventListener("input", () => {
	updateglassUI();
})
document.querySelector("#opacity").addEventListener("input", () => {
	updateglassUI();
})
document.querySelector("#saturation").addEventListener("input", () => {
	updateglassUI();
})

// Generating random values 
document.querySelector("#random").onclick = () => {
	document.getElementById("blur").value = ran_nums(50);
	document.getElementById("opacity").value = ran_nums(50);
	document.getElementById("saturation").value = ran_nums(50);
	updateglassUI()
}

// This converts the hex value to RGB with a alpha variant too
function hexToRGB(hex, alpha) {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
	} else {
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}
}

// This ensures Updating the glassUI effect
function updateglassUI() {
	var blur = document.getElementById("blur").value;
	var opacity = document.getElementById("opacity").value;
	var saturation = document.getElementById("saturation").value;
	var hex = document.getElementById("glasscolor").value;

	// Dividing by 100 as max opacity is 1
	var rgba = hexToRGB(hex, opacity / 100);
	var glassOutput = "backdrop-filter: " + "blur(" + blur + "px)" + "saturate(" + saturation + "%); \n background-color: " + rgba + ";";

	document.querySelector("#result").value = glassOutput;

	// Setting the css styles changes
	document.querySelector("#disbox").style.backdropFilter = "blur(" + blur + "px)" + " saturate(" + saturation + "%)";
	document.querySelector("#disbox").style.backgroundColor = rgba;
}