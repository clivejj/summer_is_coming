clear = document.getElementById("clear");
box = document.getElementById("box");

var x = -1;
var y = -1;
box.addEventListener('click' draw);
function draw(e) {
    x = e.offsetX.toString();
    y = e.offsetY.toString();
    if (lastX != -1) {
	var line = document.createElementNS("www.w3.org/2000/svg", "circle");
	line.setAttribute("x1", lastX);
	line.setAttribute("y1", lastY);
	line.setAttribute("x2", x);
	line.setAttribute("y1", y);
	box.appendChild(line);
    
