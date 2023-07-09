song = "";
song2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";

function preload()
{
	song = loadSound("Song.mp3");
    song2 = loadSound("music.mp3");

	
}



function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotposes);
}

function modelLoaded() {
    console.log("Model loaded successfully");
}

function gotposes(results) {
	if (results.length > 0) {
		console.log(results);
		leftWristX = results[0].pose.leftWrist.x;
		leftWristY = results[0].pose.leftWrist.y;
		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;

		console.log('left wrist x = ' + leftWristX + 'left wrist y = ' + leftWristY);
		console.log('right wrist x = ' + rightWristX + 'right wrist y = ' + rightWristY); 
	}
}