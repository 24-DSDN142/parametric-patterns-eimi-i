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
  background(180, 215, 255); //light blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  //right red koi fish
  fill(249,89,43); //A deep orange
  stroke(249,89,43);
  beginShape();
  vertex(50, 50);
  quadraticVertex(0, 115, 60, 140);
  quadraticVertex(100, 145, 70, 110);
  quadraticVertex(40,100,50,50)
  endShape(CLOSE);
  //tail
  beginShape();

  endShape(CLOSE);

  //left white koi
  fill('white');
  stroke('white');



  //water ripples

  // Draw bottom left white bezier curve for the water ripple
  noFill();
  stroke('white')
  strokeWeight(1.5)
  arc(220/4, 170, 10, 5, 0, 360);
  arc(220/4, 170, 40, 15, 0, 290);
  arc(220/4, 170, 70, 30, 0, 100);
  arc(220/4, 170, 70, 30, 130, -30);

  //bubbles
  fill(210,230,255)
  stroke(210,230,255)
  strokeWeight(1);
  ellipse(180,150,20,20);

  let bubble = false;
  if(bubble <= 20){
  //bubble zone
 }
  else{}

  //ideas for if statements: if (certain co ords) have 3 fish, 
  //or change colour of existing fish OR include leaf floating in 
  //the pond like a maple leaf or momiji

}

