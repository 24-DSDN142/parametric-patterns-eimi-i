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
  


  //BLUE JELLYFISH
  push();
  translate(-30,25)
  rotate(-29)


  //head
  fill(183,203,246); 
  stroke(183,203,246);
  arc(55, 55, 50, 65, 180,0); //semicircle top of head

  fill(128, 139, 189) //shadow of head
  stroke(128, 139, 189)
  beginShape();
  vertex();

  quadraticVertex();

  endShape(CLOSE)
  
  //triangle middle leg thing
  fill(183,203,246); 
  stroke(183,203,246);
  beginShape();
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

  //middle of head
  fill(219, 230, 255);
  stroke(219, 230, 255)
  beginShape();
  vertex(33,50)
  quadraticVertex(55,20,78,50);
  endShape(CLOSE);

  //pink head highlights
  fill(245, 203, 245);
  stroke(245, 203, 245);
  beginShape(); 
  vertex(50,25);
  quadraticVertex(35,29,33,50);
  quadraticVertex(43,29,55,25);
  endShape(CLOSE);
  ellipse(65,30,2.5,2.5);
  beginShape();
  vertex(60,33);
  quadraticVertex(80,40,76,50);
  quadraticVertex(70,40,60,33);
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
  
  //legs
  noFill();
  stroke(183,203,246);
  strokeWeight(0.7);
  bezier(40,55,15,65,80,90,40,120);
  bezier(70,55,100,65,40,90,80,120);
  stroke(180,107,192); //purple
  bezier(50,56.4,30,70,90,100,30,110);
  bezier(65,55,80,70,50,100,90,112);
  stroke('white');
  bezier(75,55,110,80,40,90,60,120);
  bezier(33,59,0,70,70,90,26,120);
  pop();


  //PURPLE JELLYFISH
  push();
  translate(120,45);
  rotate(30);

  //head
  fill(183,203,246); 
  stroke(183,203,246);
  arc(55, 55, 50, 65, 180,0); //semicircle top of head

  fill(128, 139, 189); //shadow of head
  stroke(128, 139, 189);
  beginShape();
  vertex();

  quadraticVertex();

  endShape(CLOSE);

  //triangle middle leg thing
  fill(183,203,246); 
  stroke(183,203,246);
  beginShape();
  vertex(55,55);
  quadraticVertex(55,70,62,80);
  vertex(48,80);
  quadraticVertex(55,69,55,25)
  endShape(CLOSE);
  beginShape(); //bottom
  vertex(55,80);
  quadraticVertex(55,100,62,110);
  vertex(48,110);
  quadraticVertex(55,99,55,55);
  endShape(CLOSE);

//middle of head
fill(219, 230, 255);
stroke(219, 230, 255);
beginShape();
vertex(33,50)
quadraticVertex(55,20,78,50);
endShape(CLOSE);

//pink head highlights
fill(245, 203, 245);
stroke(245, 203, 245);
beginShape(); 
vertex(50,25);
quadraticVertex(35,29,33,50);
quadraticVertex(43,29,55,25);
endShape(CLOSE);
ellipse(65,30,2.5,2.5);
beginShape();
vertex(60,33);
quadraticVertex(80,40,76,50);
quadraticVertex(70,40,60,33);
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

//legs
noFill();
stroke(183,203,246);
strokeWeight(0.7);
bezier(40,55,15,65,80,90,40,120);
bezier(70,55,100,65,40,90,80,120);
stroke(180,107,192); //purple
bezier(50,56.4,30,70,90,100,30,110);
bezier(65,55,80,70,50,100,90,112);
stroke('white');
bezier(75,55,110,80,40,90,60,120);
bezier(33,59,0,70,70,90,26,120);
pop();

  //background

  //bubbles
  fill(183,203,246); //blue bubbles
  stroke(183,203,246);
  ellipse(140,19,12,12); //big bubble up top
  ellipse(30,155,17,17); //big bubble down bottom LEFT
  ellipse(75,183,5,5);
  ellipse(90,20,3.5,3.5); //small bubble to the top
  ellipse(14,130,3,3); //small bubble BOTTOM LEFT

  noFill(); //clear bubbles
  stroke(240,220,255);
  strokeWeight(1.4);
  ellipse(50,165,20,20); //bottom left
  ellipse(116,37,18,18); //top middle
  ellipse(165,47,20,20); //top right



  //shines
  fill(240,220,255);
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

  let bubble = false;
  if(bubble <= 20){
  //bubble zone
 }
  else{}
}

