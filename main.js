var images=[
    "mars.jpg", "mars3.jpg", "mars4.jpg" , "mars1.jfif" , "mars2.jfif"
]
var randomBack=Math.floor(Math.random()*5)
var canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d")
var width=100;
var height=90;
var roverX=10;
var roverY=10;
var backgroundimgs=images[randomBack]
var roverimg="rover.png"

function update() {
    Bimg=new Image();
    Bimg.src=backgroundimgs;
    Bimg.onload=uploadB

    Rimg=new Image();
    Rimg.src=roverimg;
    Rimg.onload=uploadR
}
function uploadB() {
    ctx.drawImage(Bimg,0,0,canvas.width,canvas.height)
}
function uploadR() {
    ctx.drawImage(Rimg,roverX,roverY,width,height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e) {
console.log(e)
keyclick=e.keyCode
console.log(keyclick);
if(keyclick==38) {
    up()
    console.log("up");
}
if(keyclick==40) {
    down()
    console.log("down");
}
if(keyclick==37) {
    left()
    console.log("left");
}
if(keyclick==39) {
    right()
    console.log("right");
}

}
function up(){
    if (roverY>=0 ) {
        roverY-=10;
        console.log("roverY="+roverY);
        console.log("roverX="+roverX);
        uploadB()
        uploadR()
    }

}
function down(){
    if (roverY<=510 ) {
        roverY+=10;
        console.log("roverY="+roverY);
        console.log("roverX="+roverX);
        uploadB()
        uploadR()
    }
}
function left(){
    if (roverX>=0 ) {
        roverX-=10;
        console.log("roverY="+roverY);
        console.log("roverX="+roverX);
        uploadB()
        uploadR()
    }
}
function right(){
    if (roverX<=700 ) {
        roverX+=10;
        console.log("roverY="+roverY);
        console.log("roverX="+roverX);
        uploadB()
        uploadR()
    }
}

