function sharebtnpopup() {
    document.querySelector("#share__").style.display = 'flex';
	document.querySelector("#share__").classList.add("fadin");
}

document.querySelector("#cancel_share__").onclick = () => {
	document.querySelector("#share__").style.display = 'none';
}

function mbtn() {
    window.location.href = "https://hashcss.netlify.app";
}