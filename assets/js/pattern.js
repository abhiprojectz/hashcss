// Initializing events listener for various range bars ,basicaly the customizing range bars.
// This ensures whenever a range bar value is changed then we can update the changes (basically, call that update function).
document.querySelector("#p_size").addEventListener("input", () => {
	update();
})

document.querySelector("#p_width").addEventListener("input", () => {
	update();
})
// Generating random values 
document.querySelector("#random").onclick = () => {

	document.getElementById("p_color").value = getRandomColor();
	document.getElementById("bg_color").value = getRandomColor();
	update()
}


function patternColor() {
	update();
}

function result() {
    document.querySelector("#codecopy").style.display = 'flex';
	document.querySelector("#codecopy").classList.add("fadin");
	var target = document.querySelector("#copyoutput");
    var output = "";


}

document.querySelector("#cancel-codecopy").onclick = () => {
	document.querySelector("#codecopy").style.display = 'none';
}


// This function updates the shadow of the target element.
function update() {
	var p_size = document.getElementById("p_size").value;
	var p_color = document.getElementById("p_color").value;
    var bg_color = document.getElementById("bg_color").value;
    var type = document.getElementById("p_style").value;
    var p_width = document.getElementById("p_width").value;
    var p_width_con = document.querySelector("#p_width_con");

    if (type == "Waves") {
        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'none';

        var output = 'background-color:' + bg_color +';'+ '\n' + 'background-image:  repeating-radial-gradient(circle at 0 0, transparent 0, ' + bg_color + ' '+ p_size + 'px), repeating-linear-gradient(' + p_color + ', ' + p_color +')';

        document.querySelector('#disbox').setAttribute('style', 'background-color:' + bg_color +';'+ 'background-image:  repeating-radial-gradient(circle at 0 0, transparent 0, ' + bg_color + ' '+ p_size + 'px), repeating-linear-gradient(' + p_color + ', ' + p_color +')');
        
        document.querySelector("#copyoutput").textContent = output;
    }

    if (type == "HorizontalLines") {

        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'flex';

        output = "background-image: repeating-linear-gradient(0deg, " + p_color +", " + p_color + " " + p_width + "px, transparent " + p_width + "px, transparent); \n background-size: " + p_size + "px " + p_size + "px; \n background-color:" + bg_color + ";";

        document.querySelector('#disbox').setAttribute('style',  "background-image: repeating-linear-gradient(0deg, " + p_color +", " + p_color + " " + p_width + "px, transparent " + p_width + "px, transparent);background-size: " + p_size + "px " + p_size + "px; background-color:" + bg_color + ";"); 
    }

    if (type == "Dots") {

        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'flex';

        output = "background-image: radial-gradient(" + p_color + " " + p_width +  "px, transparent " + p_width + "px); \n background-size: +" + p_size + "px " + p_size + "px; \n background-color:" + bg_color + ";";

        document.querySelector('#disbox').setAttribute('style',  "background-image: radial-gradient(" + p_color + " " + p_width +  "px, transparent " + p_width + "px);background-size: +" + p_size + "px " + p_size + "px;background-color:" + bg_color + ";"); 
    }

    if (type == "VerticalLines") {

        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'flex';

        output = "background-image: repeating-linear-gradient(to right, " + p_color +", " + p_color + " " + p_width + "px, transparent " + p_width + "px, transparent); \n background-size: " + p_size + "px " + p_size + "px; \n background-color:" + bg_color + ";";

        document.querySelector('#disbox').setAttribute('style',  "background-image: repeating-linear-gradient(to right, " + p_color +", " + p_color + " " + p_width + "px, transparent " + p_width + "px, transparent);background-size: " + p_size + "px " + p_size + "px;background-color:" + bg_color + ";"); 
    }

    if (type == "CubeSi") {
        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'none';

        output = "background-image:  linear-gradient(30deg,  "+ p_color +  " 12%, transparent 12.5%, transparent 87%, "  + p_color + " 87.5%, " + p_color + " ), linear-gradient(150deg, " + p_color + " 12%, transparent 12.5%, transparent 87%,"  + p_color + " 87.5%, " + p_color + " ), linear-gradient(30deg, "  + p_color + " 12%, transparent 12.5%, transparent 87%, " + p_color + " 87.5%, " + p_color + " ), linear-gradient(150deg, " + p_color + " 12%, transparent 12.5%, transparent 87%, " + p_color + " 87.5%, " + p_color + " ), linear-gradient(60deg, rgba(255,0,102,0.5) 25%, transparent 25.5%, transparent 75%, rgba(255,0,102,0.5) 75%, rgba(255,0,102,0.5)), linear-gradient(60deg, rgba(255,0,102,0.5) 25%, transparent 25.5%, transparent 75%, rgba(255,0,102,0.5) 75%, rgba(255,0,102,0.5));" + "\n" +
        "background-size: " + (2 * p_size ) + "px " + (3.5 * p_size ) + "px;" + "\n" +
        "background-position: 0 0, 0 0, " + p_size + " px " + (1.75 * p_size ) + "px, " + p_size + "px " + (1.75 * p_size) + "px, 0 0,  " + p_size + "px " + (1.75 * p_size) + "px;"  + "\n" +
        "background-color: " + bg_color + ";";

        document.querySelector('#disbox').setAttribute('style',  "background-image:  linear-gradient(30deg,  "+ p_color +  " 12%, transparent 12.5%, transparent 87%, "  + p_color + " 87.5%, " + p_color + " ), linear-gradient(150deg, " + p_color + " 12%, transparent 12.5%, transparent 87%,"  + p_color + " 87.5%, " + p_color + " ), linear-gradient(30deg, "  + p_color + " 12%, transparent 12.5%, transparent 87%, " + p_color + " 87.5%, " + p_color + " ), linear-gradient(150deg, " + p_color + " 12%, transparent 12.5%, transparent 87%, " + p_color + " 87.5%, " + p_color + " ), linear-gradient(60deg, rgba(255,0,102,0.5) 25%, transparent 25.5%, transparent 75%, rgba(255,0,102,0.5) 75%, rgba(255,0,102,0.5)), linear-gradient(60deg, rgba(255,0,102,0.5) 25%, transparent 25.5%, transparent 75%, rgba(255,0,102,0.5) 75%, rgba(255,0,102,0.5));" +
        "background-size: " + (2 * p_size ) + "px " + (3.5 * p_size ) + "px;" + 
        "background-position: 0 0, 0 0, " + p_size + " px " + (1.75 * p_size ) + "px, " + p_size + "px " + (1.75 * p_size) + "px, 0 0,  " + p_size + "px " + (1.75 * p_size) + "px;" + 
        "background-color: " + bg_color + ";"); 
    }

    if (type == "ZigZag") {
        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'none';

        output = "background: linear-gradient(135deg, " + p_color + " 25%, transparent 25%) -" + p_size +  "px 0, linear-gradient(225deg, " + p_color + " 25%, transparent 25%) -" + p_size +  "px 0, linear-gradient(315deg, " + p_color + " 25%, transparent 25%), linear-gradient(45deg, " + p_color + " 25%, transparent 25%);" + "\n" +
        "background-size: " + (p_size *2 ) + "px " + (p_size *2 ) + "px;"  + "\n" +
        "background-color: " + bg_color + ";";

        document.querySelector('#disbox').setAttribute('style',  "background: linear-gradient(135deg, " + p_color + " 25%, transparent 25%) -" + p_size +  "px 0, linear-gradient(225deg, " + p_color + " 25%, transparent 25%) -" + p_size +  "px 0, linear-gradient(315deg, " + p_color + " 25%, transparent 25%), linear-gradient(45deg, " + p_color + " 25%, transparent 25%);" + 
"background-size: " + (p_size *2 ) + "px " + (p_size *2 ) + "px;" + 
"background-color: " + bg_color + ";"); 
    }

    if (type == "Grid") {
        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'flex';


        output = "background-image: linear-gradient( " + p_color + " " +  p_width + "px, transparent " + p_width + "px), linear-gradient(to right, " + p_color + " " +  p_width + "px, transparent " + p_width + "px);"  + "\n" +
        "background-size: " + p_size + "px " + p_size + "px;"  + "\n" +
        "background-color: " + bg_color + ";";

        document.querySelector('#disbox').setAttribute('style',  "background-image: linear-gradient( " + p_color + " " +  p_width + "px, transparent " + p_width + "px), linear-gradient(to right, " + p_color + " " +  p_width + "px, transparent " + p_width + "px);" +
        "background-size: " + p_size + "px " + p_size + "px;"  +
        "background-color: " + bg_color + ";"); 
    }

    if (type == "DiagonalLines") {
        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'flex';


        output = "background-image: repeating-linear-gradient(45deg, " + p_color + " 0, " + p_color + " " +  p_width + "px, transparent 0, transparent 50%);"  + "\n" +
        "background-size: " + p_size + "px " + p_size + "px;"  + "\n" +
        "background-color: " + bg_color + ";";

        document.querySelector('#disbox').setAttribute('style',  "background-image: repeating-linear-gradient(45deg, " + p_color + " 0, " + p_color + " " +  p_width + "px, transparent 0, transparent 50%);" + 
        "background-size: " + p_size + "px " + p_size + "px;" + 
        "background-color: " + bg_color + ";"); 
    }

    if (type == "Whilrs") {
        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'none';


        output = "background-image: radial-gradient(circle at center center, " + p_color + ", " + bg_color + " ), repeating-radial-gradient(circle at center center, " + p_color + ", " + p_color + ", " + p_size + "px, transparent " + (p_size * 2) + "px, transparent " + p_size + "px);"  + "\n" +
        "background-blend-mode: multiply;"  + "\n" +
        "background-color: " + bg_color + ";";


        document.querySelector('#disbox').setAttribute('style',  "background-image: radial-gradient(circle at center center, " + p_color + ", " + bg_color + " ), repeating-radial-gradient(circle at center center, " + p_color + ", " + p_color + ", " + p_size + "px, transparent " + (p_size * 2) + "px, transparent " + p_size + "px);" + 
"background-blend-mode: multiply;" + 
"background-color: " + bg_color + ";"); 
    }

    if (type == "Checkers") {
        document.querySelector('#disbox').setAttribute('style', "");
        p_width_con.style.display = 'none';

        output = "background: repeating-conic-gradient(from 45deg, " + p_color + " 0% 25%, " + bg_color + " 0% 50%);"  + "\n" +
        "background-size: " + p_size + "px " + p_size + "px;"   + "\n" +
        "background-color: " + bg_color + ";";

        document.querySelector('#disbox').setAttribute('style', "background: repeating-conic-gradient(from 45deg, " + p_color + " 0% 25%, " + bg_color + " 0% 50%);" + 
        "background-size: " + p_size + "px " + p_size + "px;" + 
        "background-color: " + bg_color + ";");
    }
}