window.draw = window.draw || {
    dx: 10,
    dy: 10,
    xPosition: 0,
    yPosition: 0
};
draw.move = function () {
    var element = document.getElementById('circle');
    element.style.left = draw.yPosition + "px";
    element.style.top = draw.yPosition + "px";
    draw.container();
    draw.xPosition += draw.dx;
    draw.yPosition += draw.dy;

}
draw.container = function () {
    if (draw.xPosition <= 0)
        draw.dx= 10;
    if (draw.yPosition <= 0)
        draw.dy= 10;
    if (draw.xPosition >= window.innerWidth)
        draw.dx = -10;
    if (draw.yPosition >= window.innerHeight)
        draw.dy = -10;

}
window.draw.start = function () {
    setInterval(draw.move, 10);
}


