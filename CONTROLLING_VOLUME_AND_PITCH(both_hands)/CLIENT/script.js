let W = window.innerWidth;
let H = window.innerHeight;
let arr = [];
let osc;
let param = 0;
let root = 220; // low A note 
// adjust for borders
let pad_x = .05 * W;
let new_W = W - 2 * pad_x;
let clicked = 0;
let closest_note;


function setup() {
	createCanvas(W, H);
	background(255);
	osc = new p5.Oscillator('sine');
	osc.start();
	arr = getScale(root, 'minor');
	//showScale();
}

const socket = new WebSocket("ws://127.0.0.1:8080");

let X1 = 0;
let Y1 = 0;
let X2 = 0;
let Y2 = 0;

socket.addEventListener('open', function (event) {
  console.log("connected");
});

socket.addEventListener('message', function (event) {
    //coors = event.data.split(":"); // "{}@{}:{}@{}:{}@{}" ---> [{}@{}, {}@{}]"
	msg = event.data.split(":");
	hand1 = msg[0].split("@");
	hand2 = msg[1].split("@");
	
	X1 = hand1[0];
	Y1 = hand1[1];
	X2 = hand2[0];
	Y2 = hand2[1];

});


function draw() {		
	// find closest note
	let min = 100000;
	if (frameCount % 10 == 0) {
		background(255);
		//showScale();
	}
	ellipse(new_W - X1, Y1, 20, 20);
	ellipse(new_W - X2, Y2, 20, 20);
	// if (playing) {
	param = map(new_W - X1, 0, new_W, root, 2 * root);
	for (let i = 0; i < arr.length; i++) {
		if (Math.abs(arr[i] - param) < min) {
			closest_note = arr[i];
			min = Math.abs(arr[i] - param);
		}
	}
	param = closest_note;
	volume_param = map(H - Y2, 0, H, 0, 1)
	osc.freq(param, 0.1);
	osc.amp(volume_param, 0.5);
	// }
}

// function mousePressed() {
// 	osc.start();
// 	osc.amp(0.8, 0.5);
// 	playing = true;
// }

// function mouseReleased() {
// 	osc.amp(0, 0.5);
// 	osc.stop();
// 	playing = false;
// }

