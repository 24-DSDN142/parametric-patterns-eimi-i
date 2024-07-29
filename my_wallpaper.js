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

  //head
  fill(183,203,246);
  stroke(183,203,246);
  ellipse(33,40,25,30)
  beginShape();
  // vertex(20,70)
  // bezierVertex(20,30,50,0,90,50);
  vertex(45,60);
  bezierVertex(-10,100,10,45,20,45);
  // bezierVertex(15,50,25,5,60,30)
  bezierVertex()
  endShape(CLOSE);

  //legs




  //bubbles
  fill(183,203,246);
  stroke(183,203,246);
  ellipse(90,20,3.5,3.5); //small bubble to the top
  ellipse(140,35,17,17); //big bubble up top
  ellipse(40,155,20,20); //big bubble down bottom LEFT
  ellipse(14,130,3,3); //small bubble BOTTOM LEFT
  Nofill();



  //shines












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

