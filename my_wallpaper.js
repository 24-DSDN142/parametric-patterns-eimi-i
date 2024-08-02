//Aimee Masuda-Morgan

//your parameter variables go here!
let baseColour = [205,226,238]; // changes the base colour for jellyfish and regular filled bubbles
let bubbleColour = [245, 203, 245]; // changes the colour for jellyfish highlights and the outline for clear bubble 
let shineColour = [250, 229, 249]; // changes the colour of shines in background and the inside of jellyfish. 
let backgroundColour = [178,203,236]; //changes the colour of the background
let hX = 45; //moves left jellyfish along the x axis
let hY = 40; //moves the left jellyfish along the y axis
let hx = 55; //moves the right jellyfish along the x axis
let hy = 60; //moves the right jellyfish along the y axis
let bubbleType = 18; //bubble pattern in the background 
let tentacleWidth = 2; //changes the width of jellyfish legs / tentacles
let LjellyfishAngle = -35; //rotation of left jellyfish
let RjellyfishAngle = 45; //rotation of right jellyfish

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 190;
  pWallpaper.grid_settings.cell_height = 170;
  pWallpaper.grid_settings.row_offset  = 40;
}

function wallpaper_background() {
  background(backgroundColour); //background colour
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
  ellipse(185, 150, 10, 2);
  ellipse(19, 100, 10, 1.5);
  ellipse(19, 100, 1.5, 15); 

   if(bubbleType > 19){ //If bubbleType var is bigger than 19, (eg. 20) then changes the arrangement of background bubbles to only be clear bubbles
   noFill(); //makes clear bubbles same colour as jellyfish highlights
   stroke(bubbleColour);
   strokeWeight(1.4);
   ellipse(50, 165, 20, 20); 
   ellipse(116, 37, 20, 20); 
   ellipse(165, 47, 20, 20); 
   ellipse(100, 80, 10, 10);
   ellipse(30, 130, 20, 20)
   ellipse(100, 180, 15, 15);
   } else if(bubbleType < 19){ //If bubbleType var is smaller than 19, (eg. 18) then changes the arrangement of background bubbles to only be filled bubbles
    fill(baseColour); //makes filled bubbles same colour as the base of the jellyfish
    stroke(baseColour);
    ellipse(140, 19, 10, 10); 
    ellipse(30, 155, 17, 17); 
    ellipse(75, 183, 3, 3, 3);
    ellipse(90, 20, 3.5, 3.5); 
    ellipse(14, 130, 3, 3); 
    ellipse(160, 50, 10, 10);
    ellipse(110, 40, 15, 15);
   } else if(bubbleType = 19){ //If bubbleType var is 19, then changes the arrangement of background bubbles to clear bubbles and filled bubbles
    fill(baseColour); //makes filled bubbles same colour as the base of the jellyfish
    stroke(baseColour);
    ellipse(140, 19, 11, 11); 
    ellipse(30, 155, 17, 17); 
    ellipse(75, 183, 4, 4);
    ellipse(90, 20, 3.5, 3.5); 
    ellipse(14, 130, 3, 3); 
    noFill(); // makes outlined clear bubbles same colour as jellyfish highlights
    stroke(bubbleColour);
    strokeWeight(1.4);
    ellipse(50, 165, 19, 19); 
    ellipse(116, 37, 19, 19); 
    ellipse(165, 47, 19, 19); 
    ellipse(100, 80, 10, 10);
    ellipse(30, 130, 19, 19);
   }
  
}

function DrawJellyfish(headX,headY) { //
//makes the semi circle for the head of the jellyfish
fill(baseColour); 
stroke(baseColour);
arc(headX, headY, 50, 65, 180,0); 

//makes the middle leg (2 triangle looking things) coming from the head of jellyfish
fill(baseColour); //top half of triangle leg
stroke(baseColour);
beginShape();
vertex(headX, headY);
quadraticVertex(headX, headY + 15, headX + 7, headY + 25);
vertex(headX - 7, headY + 25);
quadraticVertex(headX, headY + 14, headX, headY - 30);
endShape(CLOSE);
//bottom half of triangle leg
beginShape(); 
vertex(headX, headY + 25);
quadraticVertex(headX, headY + 45, headX + 7, headY + 55);
vertex(headX - 7, headY + 55);
quadraticVertex(headX, headY + 44, headX, headY);
endShape(CLOSE);

//makes the inside part of the jellyfish, middle of head
fill(shineColour);
stroke(shineColour);
beginShape();
vertex(headX - 22, headY - 5)
quadraticVertex(headX, headY - 35, headX + 23, headY - 5);
endShape(CLOSE);

//jellyfish head highlights
fill(bubbleColour); 
stroke(bubbleColour);
beginShape(); //left hightlight
vertex(headX - 5, headY - 30);
quadraticVertex(headX - 20, headY - 26, headX - 22, headY - 5);
quadraticVertex(headX - 12, headY - 26, headX, headY - 30);
endShape(CLOSE);
ellipse(headX + 10, headY - 25,2.5,2.5); //highlight dot
beginShape(); //right highlight
vertex(headX + 5, headY - 22);
quadraticVertex(headX + 25, headY - 15, headX + 21, headY - 5);
quadraticVertex(headX + 15, headY - 15, headX + 5, headY - 22);
endShape(CLOSE);

//makes 6 jellyfish legs
noFill();
stroke(baseColour); //base colour of jellyfish middle 2 legs
strokeWeight(tentacleWidth); 
bezier(headX - 15, headY, headX - 40, headY + 10, headX + 25, headY + 35, headX - 15, headY + 65);
bezier(headX + 15, headY, headX + 45, headY + 10, headX - 15, headY + 35, headX + 25, headY + 65);
stroke(bubbleColour); //jellyfish highlight colour inner 2 legs
bezier(headX - 5, headY + 1.4, headX - 25, headY + 15, headX + 35, headY + 45, headX - 25, headY + 55);
bezier(headX + 10, headY, headX + 25, headY + 15, headX - 5, headY + 45, headX + 35, headY + 57);
stroke(shineColour); //background shine colour outer 2 legs
bezier(headX + 20, headY, headX + 55, headY + 25, headX - 15, headY + 35, headX + 5, headY + 65);
bezier(headX - 22, headY + 4, headX - 55, headY + 15, headX + 15, headY + 35, headX - 29, headY + 65);

//bottom rim of jellyfish head
fill(baseColour); //base colour of jellyfish
stroke(baseColour);
strokeWeight(1);
ellipse(headX - 25, headY, 10, 8);
ellipse(headX - 15, headY - 2, 10, 8);
ellipse(headX - 5, headY - 3, 10, 8);
ellipse(headX + 5, headY - 3, 10, 8);
ellipse(headX + 15, headY - 2, 10, 8);
ellipse(headX + 25, headY - 2, 10, 8);

}