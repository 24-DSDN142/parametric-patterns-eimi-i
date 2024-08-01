//your parameter variables go here!
let baseColour = [255,197,225]; // changes the base colour for jellyfish and regular filled bubbles
let bubbleColour = [247, 240, 195]; // changes the colour for jellyfish highlights and the outline for clear bubble 
let shineColour = [255, 219, 237]; // changes the colour of shines in background and the inside of jellyfish.
let backgroundColour = [121, 139, 199]; //changes the colour of the background
let hX = 67; //moves left jellyfish along the x axis
let hY = 10; //moves the left jellyfish along the y axis
let hx = 65; //moves the right jellyfish along the x axis
let hy = -90; //moves the right jellyfish along the y axis
let bubbleSize = 20; //bubble size for both bubble types 
let tentacleWidth = 1.5; //changes the width of jellyfish legs / tentacles
let LjellyfishAngle = 0;
let RjellyfishAngle = 145;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 190;
  pWallpaper.grid_settings.cell_height = 190;
  pWallpaper.grid_settings.row_offset  = 100;
}



function wallpaper_background() {
  background(backgroundColour); //dark muted blue colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
//LEFT JELLYFISH
  push();
  translate(-30, 25)
  rotate(LjellyfishAngle)
  DrawJellyfish(hX,hY);
  pop();
  
//RIGHT JELLYFISH
  push();
  translate(140, 35);
  rotate(RjellyfishAngle);
  DrawJellyfish(hx,hy);
  pop();

//adds details to the background
//shines
  fill(shineColour);
  stroke(shineColour);
  ellipse(80, 130, 5, 1);
  ellipse(80, 130, 1, 10);
  ellipse(170, 180, 5, 1);
  ellipse(170, 180, 1, 10);
  ellipse(185, 150, 2, 20);
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
   ellipse(100,80,10,10);
   ellipse(30,130,bubbleSize,bubbleSize)
   ellipse(100,180,15,15);
   } else if(bubbleSize < 19){
    fill(baseColour); //blue bubbles
    stroke(baseColour);
    ellipse(140,19,bubbleSize - 8, bubbleSize - 8); //big bubble up top
    ellipse(30,155,17,17); //big bubble down bottom LEFT
    ellipse(75,183,bubbleSize - 15,bubbleSize - 15);
    ellipse(90,20,3.5,3.5); //small bubble to the top
    ellipse(14,130,3,3); //small bubble BOTTOM LEFT
    ellipse(160,50,10,10);
    ellipse(110,40,15,15);
   } else if(bubblesize = 19){
    fill(baseColour); //blue bubbles
    stroke(baseColour);
    ellipse(140,19,bubbleSize - 8, bubbleSize - 8); //big bubble up top
    ellipse(30,155,17,17); //big bubble down bottom LEFT
    ellipse(75,183,bubbleSize - 15,bubbleSize - 15);
    ellipse(90,20,3.5,3.5); //small bubble to the top
    ellipse(14,130,3,3); //small bubble BOTTOM LEFT
    noFill(); //clear bubbles
    stroke(bubbleColour);
    strokeWeight(1.4);
    ellipse(50,165,bubbleSize,bubbleSize); //bottom left
    ellipse(116,37,bubbleSize,bubbleSize); //top middle
    ellipse(165,47,bubbleSize,bubbleSize); //top right
    ellipse(100,80,10,10);
    ellipse(30,130,bubbleSize,bubbleSize)
   }
  
}

function DrawJellyfish(headX,headY) { //
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
vertex(headX - 7,headY + 25);
quadraticVertex(headX,headY + 14,headX,headY - 30);
endShape(CLOSE);
beginShape(); //bottom
vertex(headX,headY+25);
quadraticVertex(headX,headY + 45,headX + 7,headY + 55);
vertex(headX - 7,headY + 55);
quadraticVertex(headX,headY + 44,headX,headY);
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
//legs
noFill();
stroke(baseColour); //base colour of jellyfish middle 2 legs
strokeWeight(tentacleWidth); 
bezier(headX - 15, headY, headX - 40, headY + 10, headX + 25, headY + 35, headX - 15, headY + 65);
bezier(headX + 15, headY, headX + 45, headY + 10, headX - 15, headY + 35, headX + 25, headY + 65);
stroke(bubbleColour); //brightest colour inner 2 legs
bezier(headX - 5, headY + 1.4, headX - 25, headY + 15, headX + 35, headY + 45, headX - 25, headY + 55);
bezier(headX + 10, headY, headX + 25, headY + 15, headX - 5, headY + 45, headX + 35, headY + 57);
stroke(shineColour); //lightest colour outer 2 legs
bezier(headX + 20, headY, headX + 55, headY + 25, headX - 15, headY + 35, headX + 5, headY + 65);
bezier(headX - 22, headY + 4, headX - 55, headY + 15, headX + 15, headY + 35, headX - 29, headY + 65);
//bottom rim
fill(baseColour); //blue
stroke(baseColour);
strokeWeight(1);
ellipse(headX - 25, headY,10,8);
ellipse(headX - 15, headY - 2,10,8);
ellipse(headX - 5, headY - 3,10,8);
ellipse(headX + 5, headY - 3,10,8);
ellipse(headX + 15, headY - 2,10,8);
ellipse(headX + 25, headY - 2,10,8);

}