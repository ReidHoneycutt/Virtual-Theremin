// show this just on white board
function showScale() {
	let h = 25;  
	strokeWeight(4);
	text("One", pad_x - 30, h)
	line(pad_x, 0, pad_x, H);
	text("Two", new_W * (1/8) + pad_x - 50, h);
	line(new_W * (1/8) + pad_x, 0, new_W * (1/8) + pad_x, H);
	text("Three", new_W * (1/4) + pad_x - 50, h);
	line(new_W * (1/4) + pad_x, 0, new_W * (1/4) + pad_x, H);
	text("Four", new_W * (1/3) + pad_x - 30, h);
	line(new_W * (1/3) + pad_x, 0, new_W * (1/3) + pad_x, H);
	text("Five", new_W * (1/2) + pad_x - 50, h);
	line(new_W * (1/2) + pad_x, 0, new_W * (1/2) + pad_x, H);
	text("Six", new_W * (2/3) + pad_x - 50, h);
	line(new_W * (2/3) + pad_x, 0, new_W * (2/3) + pad_x, H);
	text("Seven", new_W * (7/8) + pad_x - 50, h);
	line(new_W * (7/8) + pad_x, 0, new_W * (7/8) + pad_x, H);
	//line(new_W + pad_x, 0, new_W + pad_x, H);
}
