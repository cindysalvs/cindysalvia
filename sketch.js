let goLeft = false;
let x = 300;
let y = 100;
function setup() {
  // put setup code here
  createCanvas(400,200);
}

function draw() {
  // put drawing code here

  background(134,208,200);
  line(200,0,200,200);

  fill(255,111,0);
  ellipse(100,100,160,100);
  fill(220,96,0);
  ellipse(100,100,120,100);
  fill(196,85,0);
  ellipse(100,100,80,100);
  fill(255,111,0);
  ellipse(100,100,30,100);

  
  fill(0,0,0);
  triangle(50,90,60,70,80,95);
  triangle(115,95,135,70,145,90)

  arc(100, 110, 50,50, radians(0), radians(180))

  fill(0,0,0)
  triangle(75,110,85,110,82,118)
  triangle(85,110,95,110,92,118)
  triangle(95,110,105,110,102,118)
  triangle(105,110,115,110,112,118)
  triangle(115,110,125,110 ,122,118)

  rect (97,20,8,30)


  //Bagian Kanan
  fill(255,111,0);
  ellipse(x,y,160,100);
  fill(220,96,0);
  ellipse(x,y,120,100);
  fill(196,85,0);
  ellipse(x,y,80,100);
  fill(255,111,0);
  ellipse(x,y,30,100);
  
  fill(0,0,0);
  triangle(x-50,y-10,x-40,y-30,x-20,y-5);
  triangle(x+15,y-5,x+35,y-30,x+45,y-10)
  
  arc(x, y+10, 50,50, radians(0), radians(180))

  fill(0,0,0)
  triangle(x-25,y+10,x-15,y+10,x-18,y+18)
  triangle(x-15,y+10,x-5,y+10,x-8,y+18)
  triangle(x-5,y+10,x+5,y+10,x+2,y+18)
  triangle(x+5,y+10,x+15,y+10,x+12,y+18)
  triangle(x+15,y+10,x+25,y+10,x+22,y+18)

  rect (x-3,y-80,8,30)

  if(goLeft==false){
  y=y+2;
  }
  if(goLeft==true){
    y=y-2;
  
  }
  if(y>150){
    goLeft=true;
  
  }
  if(y<90){
    goLeft=false;
  
  
  }
}