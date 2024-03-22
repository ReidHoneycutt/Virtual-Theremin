let W = window.innerWidth;
let H = window.innerHeight;
let arr = [];
let osc, playing;
let param = 0;
let root = 220; // low A note 
// adjust for borders
let pad_x = .05 * W;
let new_W = W - 2 * pad_x;
let clicked = 0;
let closest_note;
let coors = [];

const socket = new WebSocket("ws://127.0.0.1:8080");

let X = 0;
let Y = 0;

function setup() {
	createCanvas(W, H);
	background(255);
	osc = new p5.Oscillator('sine');
	arr = getScale(root, 'minor');
	showScale();
}



socket.addEventListener('open', function (event) {
  console.log("connected");
});

socket.addEventListener('message', function (event) {
    //coors = event.data.split(":"); // "{}@{}:{}@{}:{}@{}" ---> [{}@{}, {}@{}, {}@{}]"
	msg = event.data.split("@");
	X = msg[0] + 150;
	Y = msg[1];
  //console.log("Message from server: ", event.data);
});


function draw() {	
	// find closest note

    //for (let i = 0; i < coors.length; i++) {
	//let components = coors[i].split("@"); // {}@{} ---> [{}, {}]
	//X = components[0];
	//Y = components[1];
	
	let min = 100000;
	if (frameCount % 10 == 0) {
		background(255);
		showScale();
	}
	ellipse(new_W - X, Y, 20, 20);
	console.log(X, Y);
	if (playing) {
		param = map(new_W - X, 0, new_W, root, 2 * root);
		for (let i = 0; i < arr.length; i++) {
			if (Math.abs(arr[i] - param) < min) {
				closest_note = arr[i];
				min = Math.abs(arr[i] - param);
			}
		}
		param = closest_note;
		osc.freq(param, 0.1);
		osc.amp(1, 0.5);
	}
    //}

	// console.log(" ");
	// console.log(new_W-X);
	// console.log(Y);
}

function mousePressed() {
	osc.start();
	osc.amp(0.8, 0.5);
	playing = true;
}

function mouseReleased() {
	osc.amp(0, 0.5);
	osc.stop();
	playing = false;
}

