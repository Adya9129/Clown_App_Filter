nose_x = 0;
nose_y = 0;


function preload(){
Clown_Nose = loadImage("https://i.postimg.cc/SR6Vrwgz/Clown-Nose.png");
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){
if ( results.length > 0){
console.log(results);
nose_x = results[0].pose.nose.x-15;
nose_y = results[0].pose.nose.y-15;
console.log("Nose X:" + nose_x);
console.log("Nose Y" + nose_y );
//console.log("Left Ear X:" + results[0].pose.leftEar.x);
//console.log("Left Ear Y:" + results[0].pose.leftEar.y);
//console.log("Left Wrist X:" + results[0].pose.leftWrist.x);
//console.log("Left Wrist Y:" + results[0].pose.leftWrist.y);
}

}

function modelLoaded(){
    console.log("Model has loaded");
}

function draw(){
image(video,0,0,300,300);
//fill(242, 7, 7);
//stroke(242, 7, 7);
//circle(nose_x, nose_y, 20);
image(Clown_Nose, nose_x, nose_y, 30, 30);
}

function take_snapshot(){
    save('clown_nose_image.png');
}