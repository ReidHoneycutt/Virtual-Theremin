class LightSnake {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.terminate = 0;
  }
  update() {
    
    if (this.terminate == 1) {
      this.r--;
    }
    else {
      this.r++
    }
  }
  show() {
    fill((frameCount%1000)/1000, 1, 1);
    stroke(1-(frameCount%1000)/1000, 1, 1)
    ellipse(this.x, this.y, this.r)
    //       Some other aesthetic options
	//rect(this.x, this.y, this.r, Math.random(.5, 5) * this.r)
	//triangle(this.x, this.y - 200, this.x + Math.x * this.r, this.y + Math.random(.5, 5) * this.r )
  }
}
