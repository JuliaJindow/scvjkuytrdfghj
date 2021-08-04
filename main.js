var noseX = 0;
var noseY = 0;
 function preload() {
nose = loadImage("https://i.postimg.cc/7hfC8c0r/Clown-nose.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
console.log("PoseNet is initialized");
}

function draw() {
image(video,0,0,300,300);
image(nose,noseX,noseY,20,20);
/*fill(255,0,0);
stroke(255,0,0);
circle(noseX,noseY,20);*/
}

function takeSnapshot() {
save("myFilter.png");
}

function gotPoses(results) {
if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x-10;
    noseY = results[0].pose.nose.y-10;
}
}