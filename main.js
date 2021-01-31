var canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var bgimage="mars.jpg";
roverimage="rover.png";
roverHeight=90;
roverWidth=100;
roverX=10;
roverY=10;
function add() {
 bgimg=new Image();
 bgimg.onload=uploadBackground;
 bgimg.src=bgimage;
 roverimg=new Image();
 roverimg.onload=uploadRover;
 roverimg.src=roverimage;
}
function uploadBackground() {
    ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(roverimg, roverX, roverY, roverWidth, roverHeight);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    var keyPress=e.keyCode;
    console.log(keyPress);
    if (keyPress == '38') {
        up();
        console.log("up");
    }
    if (keyPress == '40') {
        down();
        console.log("down");
    }
    if (keyPress == '37') {
        left();
        console.log("left");
    }
    if (keyPress == '39') {
        right();
        console.log("right");
    }
}
function up() {
    if (roverY >= 0) {
        roverY=roverY-10;
        console.log("When up arrow is pressed, X=" + roverX + "| Y=" + roverY);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if (roverY <= 500) {
        roverY=roverY+10;
        console.log("When down arrow is pressed, X=" + roverX + "| Y=" + roverY);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if (roverX >= 0) {
        roverX=roverX-10;
        console.log("When left arrow is pressed, X=" + roverX + "| Y=" + roverY);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (roverX <= 700) {
        roverX=roverX+10;
        console.log("When right arrow is presses, X=" + roverX + "| Y=" + roverY);
        uploadBackground();
        uploadRover();
    }
}
