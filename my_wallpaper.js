//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(63, 71, 104); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  


  //Jellyfish
  push();
  // translate(-30,25)
  // rotate(-25)

  //head

  fill(183,203,246);
  stroke(183,203,246);
  arc(55, 55, 50, 75, 180,0);
  ellipse()


  fill(180,107,192);
  stroke(180,107,192);
  beginShape();
  vertex(130,110);
  quadraticVertex(140,10,150,110);
  endShape(CLOSE);

  //legs
 
  fill(183,203,246);
  stroke(183,203,246);
  ellipse(55,63,10,20)
  ellipse(55,85,8,18)
  ellipse(55,106,6,16)
  ellipse(55,125,4,14)
  pop()

  //bubbles

  fill(255,220,255);
  stroke(240,220,255);
  ellipse(90,20,3.5,3.5); //small bubble to the top
  ellipse(140,35,17,17); //big bubble up top
  ellipse(40,155,20,20); //big bubble down bottom LEFT
  ellipse(14,130,3,3); //small bubble BOTTOM LEFT
  Nofill();

  //shines

  fill(183,203,246);

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

