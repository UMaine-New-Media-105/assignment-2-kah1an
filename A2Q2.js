//drawing a K with vertices using the beginShape method

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("mediumpurple");
  fill("darkseagreen");
  beginShape();
  vertex(55, 50);
  vertex(100, 50);
  vertex(100, 175);
  vertex(200, 50);
  vertex(250, 50);
  vertex(135, 200); 
  vertex(250, 350);
  vertex(200, 350);
  vertex(100, 225);
  vertex(100, 350);
  vertex(55, 350);
  vertex(55, 50);
  endShape();
}
