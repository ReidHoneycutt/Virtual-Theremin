let W = window.innerWidth;
let H = window.innerHeight;
let arr = [];


function setup() {
  createCanvas(W, H);
  background(0);
  colorMode(HSB, 1, 1, 1)
}

function draw() {
  background(0)
  getPoints()
  if (arr[0].terminate==1 && arr[0].r <= 0) {
    arr.shift();
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].update()
    arr[i].show()
  }
}

function getPoints() {
  if (arr.length > 100) {
    for (let i = 0; i < arr.length-100; i++) {
      arr[i].terminate = 1;
    }
  }
  arr.push(new LightSnake(mouseX, mouseY, 1))
}


function mousePressed() {
  noLoop();
}
function mouseReleased() {
	loop();
}
