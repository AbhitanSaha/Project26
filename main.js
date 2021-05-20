staus="";
objects=[];
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
    if(staus !=""){
        console.log("yeet");
        objectDetector.detect(video,gotResults);
        for(i=0;i<objects.length;i++){
            console.log("code lazar");
            percent= floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y);
            noFill();
            stroke("#0000FF");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            if (object[i].label==yeet) {
                objectDetector.detect(gotResults);
                document.getElementById("not").innerHTML="Object Found";
                document.getElementById("status").innerHTML="Object Detected";
                video.stop();
                var synth = window.speechSynthesis;
                var utterThis = new SpeechSynthesisUtterance("object mentioned found");
                synth.speak(utterThis);
            }
            else(){
                document.getElementById("not").innerHTML="Object Not Found";
                document.getElementById("status").innerHTML="Object Detected";
            }
        }
    }  
}
function find() {
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    yeet=document.getElementById("name").value;
}
function modelLoaded() {
    console.log("Model Loaded");
    staus=true;
}
function gotResults(error,result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        objects=result;
    }
}