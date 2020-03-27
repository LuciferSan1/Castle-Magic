var myFont;
function setup() {
  createCanvas(800,400);
  myFont = loadFont('assets/harryp.ttf');
  rectMode(CENTER);

}

function draw() {
  background(0);  
fill(255);
textFont(myFont);
textSize(20);
text("HOGWARTS SCHOOL\n OF\n WITCHCRAFT AND WIZARDRY",390,30);


stroke(255);
strokeWeight(2); 
fill(234);
rect(220,390,60,600); 
rect(100,390,200,400);
rect(450,300,400,200);
rect(680,390,60,500);
fill('brown');
rect(450,350,100,200);
fill('purple');
triangle(0,190,100,50,200,190); 
triangle(190,90,220,10,250,90);
triangle(650,137,677,90,707,137);
fill('skyBlue');
stroke(0);
strokeWeight(5);
square(100,140,50);

}
