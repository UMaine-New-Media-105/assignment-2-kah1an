/*
Kahlan Newsom
NMD 105
A2Q4: Personal Flag
Flag 1: Kiribati
Flag 2: Nicaragua
*/

function setup() {
  createCanvas(600, 400);
  colorMode(HSL);
  angleMode(DEGREES);
}

function draw() {
  background(50, 90, 50); //yellow from the sun on the Kiribati flag
  addRainbow(10, -10, 3);
  addMountain(235, 45, 7, 80, 55, 40);
  addMountain(230, 19, 9, 80, 55, 45);
  addMountain(220, 40, 6, 80, 55, 50);
  addWave(-148, 200, 1.5, 240, 80, 25); //dark blue from Kiribati flag
  addWave(-148, 230, 1.5, 215, 80, 50); //lighter blue from Nicaragua flag
  addWave(-148, 260, 1.5, 240, 80, 25);
  addWave(-148, 290, 1.5, 215, 80, 50);
  addWave(-148, 320, 1.5, 240, 80, 25);
  addWave(-148, 350, 1.5, 215, 80, 50);
}

// function for the wave shape from the Kiribati flag
function addWave(xPosition, yPosition, size, h, s, l) {
  //
  push();
  noStroke();
  fill(h, s, l);
  translate(xPosition, yPosition);
  scale(size);
  beginShape();
  vertex(0, 0);
  curveVertex(0, 0);
  curveVertex(50, 20);
  curveVertex(100, 0);
  curveVertex(150, 20);
  curveVertex(200, 0);
  curveVertex(250, 20);
  curveVertex(300, 0);
  curveVertex(350, 20);
  curveVertex(400, 0);
  curveVertex(450, 20);
  curveVertex(500, 0);
  vertex(500, 60);
  vertex(0, 60);
  vertex(0, 0);
  endShape();
  pop();
}

//function for the triangle that will represent the emblem on the Nicaraguan flag but also a simplified version of the mountain range on the emblem
function addMountain(xPosition, yPosition, size, h, s, l) {
  push();
  noStroke();
  fill(h, s, l);
  translate(xPosition, yPosition);
  scale(size);
  triangle(0, 50, 25, 0, 50, 50);
  pop();
}

//function for the rainbow from the Nicaraguan emblem
function addRainbow(xPosition, yPosition, size) {
  push();
  translate(xPosition, yPosition);
  scale(size);
  strokeWeight(8);
  stroke(0, 100, 50);
  noFill();
  arc(80, 80, 134, 134, 180, 0); //red
  stroke(30, 100, 50);
  arc(80, 80, 125, 125, 180, 0); //orange
  stroke(60, 100, 50);
  arc(80, 80, 115, 115, 180, 0); //yellow
  stroke(120, 100, 50);
  arc(80, 80, 105, 105, 180, 0); //green
  stroke(210, 100, 50);
  arc(80, 80, 95, 95, 180, 0); //blue
  strokeWeight(5);
  stroke(270, 100, 50);
  arc(80, 80, 88, 88, 178, 2); //purple
  pop();
}
