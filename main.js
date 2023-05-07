Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(500,380);
    canvas.position(780,500);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start(){
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}
function draw(){
    image(video,0,0,500,680);
}