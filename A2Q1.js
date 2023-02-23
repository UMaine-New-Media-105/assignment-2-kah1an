//I did mine intially with columns so I will do an addColumn function instead, kept original code commented out below the functions

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
}

function draw() {
  background(220);
  stroke(100);
  strokeWeight(1);
  fill(120, 100, 60);
  addColumns(0);
  addColumns(80);
  addColumns(160);
  addColumns(240);
  addColumns(320);
  fill(325, 100, 60);
  addSpecialTile(0, 0);
  addSpecialTile(0, 80);
  addSpecialTile(0, 160);
  addSpecialTile(0, 240);
  addSpecialTile(0, 320);
  addSpecialTile(80, 160);
  addSpecialTile(160, 80);
  addSpecialTile(160, 240);
  addSpecialTile(240, 0);
  addSpecialTile(240, 320);
}

function addColumns(xPosition) {
  rect(xPosition, 0, 80, 80);
  rect(xPosition, 80, 80, 80);
  rect(xPosition, 160, 80, 80);
  rect(xPosition, 240, 80, 80);
  rect(xPosition, 320, 80, 80);
}

function addSpecialTile(xPosition, yPosition) {
  rect(xPosition, yPosition, 80);
}

/*//column 1 -- all special tiles
  fill(325, 100, 60);
  rect(0, 0, 80, 80);
  
  fill(325, 100, 60);
  rect(0, 80, 80, 80);
  
  fill(325, 100, 60);
  rect(0, 160, 80, 80);
  
  fill(325, 100, 60);
  rect(0, 240, 80, 80);
  
  fill(325, 100, 60);
  rect(0, 320, 80, 80 );
  
  
  //column 2
  fill(120, 100, 50);
  rect(80, 0, 80, 80);
  
  fill(120, 100, 50);
  rect(80, 80, 80, 80);
  
    //special tile
  fill(325, 100, 60);
  rect(80, 160, 80, 80);
  
  fill(120, 100, 50);
  rect(80, 240, 80, 80);
  
  fill(120, 100, 50);
  rect(80, 320, 80, 80);
  
  
  //column 3
  fill(120, 100, 50);
  rect(160, 0, 80, 80);
  
    //special tile
  fill(325, 100, 60);
  rect(160, 80, 80, 80);
  
  fill(120, 100, 50);
  rect(160, 160, 80, 80);
  
    //special tile
  fill(325, 100, 60);
  rect(160, 240, 80, 80);
  
  fill(120, 100, 50);
  rect(160, 320, 80, 80);
  
  
  //column 4
    //special tile
  fill(325, 100, 60);
  rect(240, 0, 80, 80);
  
  fill(120, 100, 50);
  rect(240, 80, 80, 80);
  
  fill(120, 100, 50);
  rect(240, 160, 80, 80);
  
  fill(120, 100, 50);
  rect(240, 240, 80, 80);
  
    //special tile
  fill(325, 100, 60);
  rect(240, 320, 80, 80);
  
  
  //column 5
  fill(120, 100, 50);
  rect(320, 0, 80, 80);
  
  fill(120, 100, 50);
  rect(320, 80, 80, 80);
  
  fill(120, 100, 50);
  rect(320, 160, 80, 80);
  
  fill(120, 100, 50);
  rect(320, 240, 80, 80);
  
  fill(120, 100, 50);
  rect(320, 320, 80, 80);*/
