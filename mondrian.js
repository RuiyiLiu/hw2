function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(240);
  noStroke();

  //cornsilk 
  fill(255,248,220);
  rect(0,0,100,40);
  
  // chocolate 
  fill(210,105,30);
  rect(100, 0, 180, 100);

  //  maroon
  fill(128,0,0);
  rect(0, 105, 280, 300);

  // Gold 
  fill(255,215,0);
  rect(0, 40, 100, 55);
  
  // Maroon2 
  fill(128,0,0);
  rect(280, 0, 120, 100);
  
  // cornsilk2 
  fill(255,248,220);
  rect(280,105,120,190);
  
  // chocolate2 
  fill(210,105,30);
  rect(280, 300, 120, 100);


  stroke(0);
  strokeWeight(15);
  line(280, 0, 280, 400); //4
  
  strokeWeight(20);
  line(280, 300, 400, 300); //5

  strokeWeight(10);
  line(0, 40, 100, 40);//1

  strokeWeight(10);
  line(100, 100, 100, 0); //2

  strokeWeight(15);
  line(0, 100, 400, 100); //3

}
