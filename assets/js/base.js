window.onload = function () {
	var anim = document.querySelector("#anim")
	var hints = document.querySelector("#hints")

	// Here's the all logic behind settings
	// We are checking if there is some Key stored in localStorage if, no then we sets the defaults values in localStorage
	if (localStorage.getItem("anim") === null) {
		localStorage.setItem(document.querySelector("#anim").id, document.querySelector("#anim").checked);
	}

	if (localStorage.getItem("hints") === null) {
		localStorage.setItem(document.querySelector("#hints").id, document.querySelector("#hints").checked);
	}

	anim.checked = JSON.parse(localStorage.getItem(anim.id));

	if (!anim.checked) {
		document.querySelector("#header").classList.remove("slideIn");
		document.querySelector("#dis-target").classList.remove("scaleIn");
		document.querySelector("#tools-nav").classList.remove("bottomfade");
	}

	hints.checked = JSON.parse(localStorage.getItem(hints.id));

	// If yes , that is tips are checked then we sets tooltoops to all targetted svgs so that it will help user get an idea
	if (hints.checked) {
		// const instance1 = tippy(document.querySelector('#br1'));
		// const instance2 = tippy(document.querySelector('#br2'));
		// const instance3 = tippy(document.querySelector('#br3'));
		// const instance4 = tippy(document.querySelector('#br4'));
		// const instance5 = tippy(document.querySelector('#result'));
		// const instance6 = tippy(document.querySelector('#random'));

		// instance1.hide();
		// instance2.hide();
		// instance3.hide();
		// instance4.hide();
		// instance5.hide();
		// instance6.hide();

		// All tool tips
		tippy('#br1', {
			content: 'Controls the blur value.',
		});
		tippy('#br2', {
			content: 'Controls the extend value.',
		});
		tippy('#br3', {
			content: 'Controls the horizontal length.',
		});
		tippy('#br4', {
			content: 'Controls the vertical length.',
		});
		tippy('#result', {
			content: 'Save the demo box along with generated code.',
		});
		tippy('#random', {
			content: 'Generate random data.',
		});

		tippy('#tip-topL', {
			content: 'Controls the top left border.',
		});
		tippy('#tip-topR', {
			content: 'Controls the top right border.',
		});
		tippy('#tip-Bl', {
			content: 'Controls the the bottom right border.',
		});
		tippy('#tip-Bright', {
			content: 'Controls the bottom left border.',
		});
		tippy('#tip-width', {
			content: 'Controls the width of border.',
		});
		tippy('#tip-full', {
			content: 'Controls all sides border.',
		});

		tippy('#tip-blur', {
			content: 'Controls the blur of the card.',
		});
		tippy('#tip-opacity', {
			content: 'Controls the opacity of the card.',
		});
		tippy('#tip-saturation', {
			content: 'Controls the saturation.',
		});
	}
}

var output;

// Toast notification script
function toast(text) {
	var x = document.getElementById("toast");
	document.getElementById("desc").innerHTML = text;
	x.className = "show";
	setTimeout(function () {
		x.className = x.className.replace("show", "");
	}, 5000);
}

// script to generate random numbers between n
function ran_nums(max) {
	return Math.floor(Math.random() * max) + 1;
}

// ========== CssGENX SETTINGS =========
document.querySelector("#anim").onclick = () => {
	localStorage.setItem(document.querySelector("#anim").id, document.querySelector("#anim").checked);
	console.log(document.querySelector("#anim").id, document.querySelector("#anim").checked);
}

document.querySelector("#hints").onclick = () => {
	localStorage.setItem(document.querySelector("#hints").id, document.querySelector("#hints").checked);
	console.log(document.querySelector("#hints").id, document.querySelector("#hints").checked);
}

// Script to copy the text output to clipboard 
function copycode() {
	toast("Code successfully copied ✔");
	var el = document.querySelector("#copyoutput");
	var element = document.createElement("input");
	document.querySelector("body").appendChild(element);
	element.value = el.textContent;
	element.select();
	document.execCommand("copy");
	element.remove();
}

function sharebtn(data) {
	toast("Link successfully copied ✔");

	if (data == "x") {
		var el = window.location.href;
	} else {
		var el = data;
	}
	var element = document.createElement("input");
	document.querySelector("body").appendChild(element);
	element.value = el;
	element.select();
	document.execCommand("copy");
	element.remove();
}

function copy(data) {
	toast("Code successfully copied ✔");
	var copyText = document.getElementById(data);
	copyText.select();
	document.execCommand("copy");
}

// script for about section
document.querySelector("#about").onclick = () => {
	document.querySelector("#popm").style.display = 'block';
	document.querySelector("#popm").classList.add("fadinr");
}

document.querySelector("#pop-close").onclick = () => {
	document.querySelector("#popm").style.display = 'none';
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

// ===== OUTPUT ======
document.querySelector("#result").onclick = () => {
	document.querySelector("#codecopy").style.display = 'flex';
	document.querySelector("#codecopy").classList.add("fadin");
	var target = document.querySelector("#copyoutput");
	var sitetype = document.querySelector("#result").getAttribute("type");

	if (sitetype == "shadow") {
		// Generators boilerplate
		var template = `
        <style>
          .box {
            width: 100px;
            height: 100px;
            background-color: #651FFF;
            box-shadow: ${getComputedStyle(document.querySelector("#disbox")).getPropertyValue("box-shadow")};
          }
        </style>
        <div class="box"></div>`;
	}

	if (sitetype == "border") {
		var template = `
        <style>
          .box {
            width: 100px;
            height: 100px;
            background-color: #651FFF;
            border: ${getComputedStyle(document.querySelector("#disbox")).getPropertyValue("border")};
            border-radius: ${getComputedStyle(document.querySelector("#disbox")).getPropertyValue("border-radius")};
          }
        </style>
        <div class="box"></div>`;
	}

	if (sitetype == "glassui") {
		var blur = getComputedStyle(document.querySelector("#disbox")).backdropFilter.split(" ")[0].match(/\(([^)]+)\)/)[1];
		var satur = getComputedStyle(document.querySelector("#disbox")).backdropFilter.split(" ")[1].match(/\(([^)]+)\)/)[1];
		var opac = getComputedStyle(document.querySelector("#disbox")).backgroundColor.match(/\(([^)]+)\)/)[1].split(",")[3];
		var template = `
        <style>
        .GlassBox {
            backdrop-filter: blur(${blur}) saturate(${satur});
            -webkit-backdrop-filter: blur(${blur}) saturate(${satur});
            background-color: rgba(255, 255, 255, ${opac});
            border-radius: 12px;
            border: 1px solid rgba(209, 213, 219, 0.3);
        }
        </style>
        <div class="GlassBox"></div>`;
	}

	target.textContent = template;
}

document.querySelector("#cancel-codecopy").onclick = () => {
	document.querySelector("#codecopy").style.display = 'none';
}
