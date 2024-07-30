//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
//bubble size
//jellyfish rotation
//colour
//

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(63, 71, 104); //dark muted blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  


  //Jellyfish
  push();
  // translate(-30,25)
  // rotate(-29)

  //BLUE JELLYFISH
  //head


  fill(183,203,246); 
  stroke(183,203,246);
  arc(55, 55, 50, 65, 180,0); //semicircle top of head

  fill(128, 139, 189) //shadow of head
  stroke(128, 139, 189)
  beginShape();

  endShape(CLOSE)

  fill(245, 203, 245);
  stroke(245, 203, 245);
  beginShape(); //head highlight
  vertex(55,22.7);
  bezierVertex(30,20,40,60,40,50);
  endShape(CLOSE);

  //bottom rim
  fill(183,203,246); 
  stroke(183,203,246);
  ellipse(30,55,10,8);
  ellipse(40,53,10,8);
  ellipse(50,52,10,8);
  ellipse(60,52,10,8);
  ellipse(70,53,10,8);
  ellipse(80,53,10,8);

  fill(183,203,246); 
  stroke(183,203,246);
  beginShape(); //bottom part of head
  vertex(55,55);
  quadraticVertex(55,70,62,80);
  vertex(48,80)
  quadraticVertex(55,69,55,25)
  endShape(CLOSE);
  beginShape(); //bottom
  vertex(55,80);
  quadraticVertex(55,100,62,110);
  vertex(48,110)
  quadraticVertex(55,99,55,55)
  endShape(CLOSE);

  
  //legs
  noFill();
  stroke(183,203,246);
  strokeWeight(0.7);
  bezier(40,55,15,65,80,90,40,120);
  bezier(70,55,100,65,40,90,80,120);
  stroke(180,107,192);
  bezier(50,55,30,70,90,100,30,110);
  bezier(65,55,80,70,50,100,90,112);
  stroke('white');
  bezier(75,55,110,80,40,90,60,120);
  bezier(33,55,0,70,70,90,26,120);
  pop();

  
  //PURPLE JELLYFISH
  push();
  translate(120,45);
  rotate(30);
  //head
  // fill(180,107,192); 
  // stroke(180,107,192);
  fill(183,203,246); 
  stroke(183,203,246);
  arc(55, 55, 50, 65, 180,0); //semicircle top of head
  beginShape(); //bottom part of head
  vertex(55,55);
  quadraticVertex(55,70,62,80);
  vertex(48,80)
  quadraticVertex(55,69,55,25)
  endShape(CLOSE);
  beginShape(); //bottom
  vertex(55,80);
  quadraticVertex(55,100,62,110);
  vertex(48,110)
  quadraticVertex(55,99,55,55)
  endShape(CLOSE);

  fill(128, 139, 189) //shadow of head
  stroke(128, 139, 189)
  beginShape();
  vertex(31,55);
  quadraticVertex(60,45,55,65);
  vertex(31,55);
  endShape(CLOSE);
  beginShape();
  vertex(55,65)
  quadraticVertex(50,45,79,55);
  vertex(55,65);
  endShape(CLOSE)

  //legs
  noFill();
  stroke(183,203,246);
  strokeWeight(0.7);
  bezier(40,55,15,65,80,90,40,120);
  bezier(70,55,100,65,40,90,80,120);
  stroke(180,107,192);
  bezier(50,55,30,70,90,100,30,110);
  bezier(65,55,80,70,50,100,90,112);
  stroke('white');
  bezier(75,55,110,80,40,90,60,120);
  bezier(33,55,0,70,70,90,66,130);
  fill(180,107,192); //purple jellyfish
  stroke(180,107,192);
  

  //legs


  pop();

  //bubbles
  fill(183,203,246); //blue bubbles
  stroke(183,203,246);
  ellipse(140,19,17,17); //big bubble up top
  ellipse(30,155,23,23); //big bubble down bottom LEFT
  ellipse(75,183,5,5)
  ellipse(90,20,3.5,3.5); //small bubble to the top
  ellipse(14,130,3,3); //small bubble BOTTOM LEFT

  noFill(); //clear bubbles
  stroke(240,220,255);
  strokeWeight(2)
  ellipse(50,165,30,30) //bottom left
  ellipse(116,37,28,28) //top middle
  ellipse(165,47,30,30) //top right



  //shines

 

  //highlights D:




  //dead jellyfish
  // stroke(183,203,246);
  // beginShape();
  // vertex(45,55);
  // bezierVertex(0,100,10,45,20,45);
  // bezierVertex(15,50,25,5,50,30)
  // endShape(CLOSE);

  // beginShape();
  // vertex(45,25)
  // bezierVertex(95,30,75,50,40,60);
  // endShape(CLOSE);




  // //right red koi fish
  // fill(249,89,43); //A deep orange
  // stroke(249,89,43);
  // beginShape();
  // vertex(50, 50);
  // quadraticVertex(0, 115, 60, 140);
  // quadraticVertex(100, 145, 70, 110);
  // quadraticVertex(40,100,50,50)
  // endShape(CLOSE);
  // //tail
  // beginShape();
  // fill(249,89,43);
  // stroke(249,89,43);
  // vertex(55,135);
  // quadraticVertex(50,152,20,123)
  // quadraticVertex(40,130,50,130)
  // endShape(CLOSE);

  let bubble = false;
  if(bubble <= 20){
  //bubble zone
 }
  else{}

  //ideas for if statements: if (certain co ords) have 3 fish, 
  //or change colour of existing fish OR include leaf floating in 
  //the pond like a maple leaf or momiji

}

