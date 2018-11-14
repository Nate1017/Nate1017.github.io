

var T1000;
var vidPlaying = false;
var playButton;
var videos = ['Music', 'Basketball', 'Joji', 'RunningMan'];
var vidSelect;
var pulsar;
var canvas;

function setup() {
	canvas = createCanvas(displayWidth, displayHeight);
	T1000 = createVideo(['']);
	T1000.hide();

	vidSelect = createSelect();
	vidSelect.position(10, 40);

	for(i = 0; i < videos.length;i++){
		vidSelect.option(videos[i]);
	}

	vidSelect.changed(changedVid);

	playButton = createButton('Play Video');
	playButton.mousePressed(playVid);
	playButton.position(10, 70);

}

function changedVid(){
	T1000.attribute('src', 'videos/' + vidSelect.value() + '.mp4');
	T1000.position(640/2, 480/3);
	T1000.show();
	T1000.size(640, 480);
}

function playVid(){
	if(vidPlaying == true){
		T1000.pause();
		playButton.html('Play Video');
	}else{
		T1000.play();
		T1000.volume(3);
		playButton.html('Pause Video');
	}
	vidPlaying = !vidPlaying;
}

 function draw(){
 	background(230);
 	T1000.showControls();

 	fill(0);
	textSize(30);
	textAlign(CENTER);
	text("Video Playlist: Random Things I Like", displayWidth/2, 100);
 }





