// Create a zoom instance
let zoom = new Zoom(Vec.fromList([200, 200]));

function setup() {
  createCanvas(400, 400);
  noSmooth();
}

function draw() {
  // Apply the zoom
  zoom.apply();
  background(220);
  
  // Example rectangles
  rect(-50, -100, 100, 200);
  rect(0, 0, 400, 400);
}

function mouseWheel(event) {
  // Use the position of the mouse wheel and how much the wheel was scrolled to control the zoom
  zoom.zoom(
    // The location to zoom to, which is mouseX and mouseY offset so that 0, 0 is at the center of the screen
    Vec.fromList([mouseX, mouseY]).numSub(200),
    event.delta / 1000 // How much to zoom
  );
}
