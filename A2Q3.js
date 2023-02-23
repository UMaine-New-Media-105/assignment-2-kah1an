//changed coordinates so that the K was in the upper left corner and then turned it into a function so I could add translate and scale to make it fill the canvas

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("mediumpurple");
  //createK(0, 0, 1, "darkseagreen")//test 1
  //createK(100, 70, 0.3, "cornflowerblue")//test 2
  //createK(200, 150, 0.7, "goldenrod")//test 3
  createK(73, 0, 1.332, "coral");
}

function createK(xPosition, yPosition, size, color) {
  push();
  fill(color);
  translate(xPosition, yPosition);
  scale(size);
  beginShape();
  vertex(0, 0);
  vertex(45, 0);
  vertex(45, 125);
  vertex(150, 0);
  vertex(200, 0);
  vertex(85, 150);
  vertex(200, 300);
  vertex(150, 300);
  vertex(45, 175);
  vertex(45, 300);
  vertex(0, 300);
  vertex(0, 0);
  endShape();
  pop();
}
