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
  // fill(249,89,43); //A deep orange
  // stroke(249,89,43);
  //ellipse(200/4,200/2,50,100); //draws an ellipse

  //creates 5 bezier lines for the water ripple


  // Draw bottom left white bezier curve for the water ripple
  noFill();
  stroke('white')
  arc(220/4, 150, 60, 30, 0, 290);
  arc(220/4, 150, 90, 50, 0, 290);
  arc(220/4, 150, 120, 70, 0, 290);
  arc(220/4, 150, 120, 70, 0, 290);


  let bubble = false;
  if(bubble <= 20){
  //bubble zone
 }
  else{}


}

