// Initializing events listener for various range bars ,basicaly the customizing range bars.
document.querySelector("#topL").addEventListener("input", () => {
	updateBorderRadius();
})

document.querySelector("#topR").addEventListener("input", () => {
	updateBorderRadius();
})

document.querySelector("#Bl").addEventListener("input", () => {
	updateBorderRadius();
})

document.querySelector("#Bright").addEventListener("input", () => {
	updateBorderRadius();
})

document.querySelector("#width").addEventListener("input", () => {
	updateBorder();
})

document.querySelector("#full").addEventListener("input", () => {
	updateBorderAll();
})

// Generating random values 
document.querySelector("#random").onclick = () => {
	document.getElementById("topL").value = ran_nums(50);
	document.getElementById("topR").value = ran_nums(50);
	document.getElementById("Bright").value = ran_nums(50);
	document.getElementById("Bl").value = ran_nums(50);

	updateBorderRadius()
}

// Whenever color changes this calls the updating function
function updateBorderColor() {
	updateBorder();
}

// This function updates the border radius
function updateBorderRadius() {
	var topL = document.getElementById("topL").value;
	var topR = document.getElementById("topR").value;
	var bl = document.getElementById("Bl").value;
	var br = document.getElementById("Bright").value;
	var borOutput = "border-radius: " + topL + "px " + topR + "px " + bl + "px " + br + "px;";

	// document.querySelector("#data-border").value = borOutput;
	document.querySelector("#disbox").style.borderRadius = topL + 'px ' + topR + 'px ' + bl + 'px ' + br + 'px ';
}

// This function updates the all corners of the border
function updateBorderAll() {
	var full = document.getElementById("full").value;
	var borOutput = "border-radius: " + full + "px " + full + "px " + full + "px " + full + "px;";
	// document.querySelector("#data-border").value = borOutput;
	document.querySelector("#disbox").style.borderRadius = full + "px " + full + "px " + full + "px " + full + "px";
}

// This function updates the border
function updateBorder() {
	var color = document.getElementById("Bcolor").value;
	var width = document.getElementById("width").value;
	var type = document.querySelector("#borstyle").value;
	var outpt = "border: " + width + "px " + type + " " + color + ";";
	// document.querySelector("#datborder").value = outpt;
	document.querySelector("#disbox").style.border = width + 'px ' + type + color;
}