//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

var baseColour = [183,203,246]; // colour for jellyfish and bubble 1
var bubbleColour = [245, 203, 245]; // pink colour for highlights and bubble 2
var shineColour = [219, 230, 255]; //colour of snines and inside of jellyfish
var hX = 55; //jellyfish x axis
var hY = 55; //jellyfish y axis
var bubbleSize = 20
var shineSize
var tentacleWidth = 2

// var rimSize = ;

//bubble size
//jellyfish rotation

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

//LEFT JELLYFISH
  push();
  translate(-30,25)
  rotate(-29)
  DrawJellyfish(hX,hY);
  pop();
  
//RIGHT JELLYFISH
  push();
  translate(120,45);
  rotate(30);
  DrawJellyfish(hX,hY);
  pop();

//background
//bubbles
 
//shines
  fill(shineColour);
  stroke(shineColour);
  ellipse(100,100,4,0.5);
  ellipse(100,100,0.5,8);
  ellipse(80,130,5,1);
  ellipse(80,130,1,10);
  ellipse(170,180,5,1);
  ellipse(170,180,1,10);
  ellipse(185,150,2,20);
  ellipse(185,150,10,2);
  ellipse(19,100,10,1.5);
  ellipse(19,100,1.5,15); 

   if(bubbleSize > 19){
   noFill(); //clear bubbles
   stroke(bubbleColour);
   strokeWeight(1.4);
   ellipse(50,165,bubbleSize,bubbleSize); //bottom left
   ellipse(116,37,bubbleSize,bubbleSize); //top middle
   ellipse(165,47,bubbleSize,bubbleSize); //top right
   }
  else {
   fill(baseColour); //blue bubbles
   stroke(baseColour);
   ellipse(140,19,bubbleSize - 8, bubbleSize - 8); //big bubble up top
   ellipse(30,155,17,17); //big bubble down bottom LEFT
   ellipse(75,183,bubbleSize - 15,bubbleSize - 15);
   ellipse(90,20,3.5,3.5); //small bubble to the top
   ellipse(14,130,3,3); //small bubble BOTTOM LEFT

   }
  

}

function DrawJellyfish(headX,headY) {
//head
fill(baseColour); 
stroke(baseColour);
arc(headX, headY, 50, 65, 180,0); //semicircle top of head
//triangle middle leg thing
fill(baseColour); 
stroke(baseColour);
beginShape();
vertex(headX,headY);
quadraticVertex(headX,headY + 15,headX + 7,headY + 25);
vertex(headX - 7,headY + 25)
quadraticVertex(headX,headX + 14,headX,headY - 30)
endShape(CLOSE);
beginShape(); //bottom
vertex(headX,headY+25);
quadraticVertex(headX,headY + 45,headX + 7,headY + 55);
vertex(headX - 7,headY + 55)
quadraticVertex(headX,headY + 44,headX,headY)
endShape(CLOSE);
//middle of head
fill(shineColour);
stroke(shineColour);
beginShape();
vertex(headX - 22, headY - 5)
quadraticVertex(headX,headY - 35,headX + 23,headY - 5);
endShape(CLOSE);
//pink head highlights
fill(bubbleColour); //pink
stroke(bubbleColour);
beginShape(); 
vertex(headX - 5,headY - 30);
quadraticVertex(headX - 20,headY - 26,headX - 22,headY - 5);
quadraticVertex(headX - 12,headY - 26,headX,headY - 30);
endShape(CLOSE);
ellipse(headX + 10,headY - 25,2.5,2.5);
beginShape();
vertex(headX + 5,headY - 22);
quadraticVertex(headX + 25,headY - 15,headX + 21,headY - 5);
quadraticVertex(headX + 15,headY - 15,headX + 5,headY - 22);
endShape(CLOSE);
//bottom rim
fill(baseColour); //blue
stroke(baseColour);
ellipse(headX - 25, headY,10,8);
ellipse(headX - 15, headY - 2,10,8);
ellipse(headX - 5, headY - 3,10,8);
ellipse(headX + 5, headY - 3,10,8);
ellipse(headX + 15, headY - 2,10,8);
ellipse(headX + 25, headY - 2,10,8);
//legs
noFill();
stroke(baseColour); //blue
strokeWeight(tentacleWidth); 
bezier(headX - 15, headY, headX - 40, headY + 10, headX + 25, headY + 35, headX - 15, headY + 65);
bezier(headX + 15, headY, headX + 45, headY + 10, headX - 15, headY + 35, headX + 25, headY + 65);
stroke(bubbleColour); //pink
bezier(headX - 5, headY + 1.4, headX - 25, headY + 15, headX + 35, headY + 45, headX - 25, headY + 55);
bezier(headX + 10, headY, headX + 25, headY + 15, headX - 5, headY + 45, headX + 35, headY + 57);
stroke(shineColour); //light blue
bezier(headX + 20, headY, headX + 55, headY + 25, headX - 15, headY + 35, headX + 5, headY + 65);
bezier(headX - 22, headY + 4, headX - 55, headY + 15, headX + 15, headY + 35, headX - 29, headY + 65);
}