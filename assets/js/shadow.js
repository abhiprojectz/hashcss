// Initializing events listener for various range bars ,basicaly the customizing range bars.
// This ensures whenever a range bar value is changed then we can update the changes (basically, call that update function).
document.querySelector("#blur").addEventListener("input", () => {
	update();
})
document.querySelector("#hor").addEventListener("input", () => {
	update();
})
document.querySelector("#vertical").addEventListener("input", () => {
	update();
})
document.querySelector("#ex").addEventListener("input", () => {
	update();
})


// Generating random values 
document.querySelector("#random").onclick = () => {
	document.getElementById("blur").value = ran_nums(50);
	document.getElementById("hor").value = ran_nums(50);
	document.getElementById("vertical").value = ran_nums(50);
	document.getElementById("ex").value = ran_nums(50);
	update()
}


function shadowColor() {
	update();
}

// This function updates the shadow of the target element.
function update() {
	var blur = document.getElementById("blur").value;
	var horizontal = document.getElementById("hor").value;
	var vertical = document.getElementById("vertical").value;
	var spread = document.getElementById("ex").value;
	var color = document.getElementById("color").value;

	var output = "box-shadow: " + horizontal + "px " + vertical + "px " + blur + "px " + spread + "px " + color + ";";
	

	// document.querySelector('#colorval').textContent = color;
	// document.querySelector('#data').value = output;

	// Setting the box css styles
	
		document.querySelector('#disbox').style.boxShadow = horizontal + 'px ' + vertical + 'px ' + blur + 'px ' + spread + 'px ' + color;
	
}
