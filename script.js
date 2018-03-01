c = document.getElementById("clear");
box = document.getElementById("box");
console.log("test");
var lastX = null;
var lastY = null;

var draw = function(e) {
    console.log("drawing");
    x = e.offsetX.toString();
    y = e.offsetY.toString();
    if (lastX != null) {
	console.log("drawing line");
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", lastX);
	line.setAttribute("y1", lastY);
	line.setAttribute("x2", x);
	line.setAttribute("y2", y);
	line.setAttribute("stroke", "black");
	box.appendChild(line);
    }
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "10");
    circle.setAttribute("fill", "black");
    box.appendChild(circle);
    lastX = x;
    lastY = y;
}

var clear = function(e) {
    console.log("clearing");
    box.innerHTML = "";
    lastX = null;
}
    
box.addEventListener("click", draw);
c.addEventListener("click", clear);


    
    
