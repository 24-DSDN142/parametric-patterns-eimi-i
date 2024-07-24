//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
var PetalAngle = 30;
var PetalLength = 40;
var PetalWidth = 7;
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
  background(147,196,125); //light green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  // middle of flower
  fill(300, 250, 100); // light yellow
  stroke(300, 250, 100); //
  ellipse(100, 100, 8, 8); //draws a circle
  //petal
  stroke('white');
  fill('white'); //white 
  ellipse(100, 73, PetalWidth, PetalLength); //first petal
  push();
  translate(200 / 2, 200 / 2); //center of the square
  rotate(PetalAngle); //rotates each petal around
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  rotate(PetalAngle);
  ellipse(0, -27, PetalWidth, PetalLength);
  pop();

}


