let zoom = new Zoom(Vec.fromList([200, 200]));

function setup() {
  createCanvas(400, 400);
  noSmooth();
}

function draw() {
  zoom.apply();
  
  background(220);
  
  rect(-50, -100, 100, 200);
  rect(0, 0, 400, 400);
}

function mouseWheel(event) {
  zoom.zoom(Vec.fromList([mouseX, mouseY]).numSub(200), event.delta / 1000);
}