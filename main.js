staus="";
function preload() {
    
}
function setup() {
    canvas= createCanvas(450,350);
    canvas.position(50,100);
    video= createCapture();
    video.hide();
}
function draw() {
    image(video,0,0,450,350);   
}
function find() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded");
    staus=true;
}