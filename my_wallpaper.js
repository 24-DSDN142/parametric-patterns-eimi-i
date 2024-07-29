//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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
  translate(-30,25)
  rotate(-25)

  //BLUE JELLYFISH
  //head
  fill(183,203,246); 
  stroke(183,203,246);
  arc(55, 55, 50, 65, 180,0); //semicircle top of head
  beginShape(); //bottom part of head
  vertex(55,55);
  bezierVertex();
  bezierVertex();
  endShape(CLOSE);
  
  //legs
  noFill();
  stroke(183,203,246);
  strokeWeight(0.7);
  bezier(40,55,15,65,80,90,40,120)
  bezier(70,55,100,65,40,90,80,120)
  stroke(180,107,192)
  bezier(50,55,30,70,90,100,30,110)
  bezier(65,55,80,70,50,100,90,112)


  fill(183,203,246); //blue jellyfish
  stroke(183,203,246);
  ellipse(55,63,10,20);
  ellipse(55,84,8,18);
  ellipse(55,104,4,14);
  pop();

  //PURPLE JELLYFISH
  push();
  // translate(330,140);
  // rotate(140);
  //head
  fill(180,107,192); //purple jellyfish
  stroke(180,107,192);
  

  //legs


  pop();

  //bubbles
  fill(255,220,255);
  stroke(240,220,255);
  ellipse(90,20,3.5,3.5); //small bubble to the top
  ellipse(140,35,17,17); //big bubble up top
  ellipse(40,155,20,20); //big bubble down bottom LEFT
  ellipse(14,130,3,3); //small bubble BOTTOM LEFT

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

