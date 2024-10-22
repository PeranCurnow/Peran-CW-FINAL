let flashThink = false;
let growFeel = false;
let feelRadius = 0;
let myFont;

function preload() {
  myFont = loadFont('bodoni_72.ttf');
}

function setup() {  
  createCanvas(windowWidth, windowHeight);  
  textAlign(CENTER, CENTER);  
  textFont(myFont);
  noStroke();  
}  

function draw() {   
  background("white");  
  
  textSize(75);  
  
  // Flash "THINK" randomly on the screen if flashThink is true
  if (flashThink) {
    for (let i = 0; i < 10; i++) {
      let randomX = random(width);
      let randomY = random(height);
      fill("black");
      text("THINK", randomX, randomY);
    }
  }
  
  // Draw the gradient ellipse
  let gradient = drawingContext.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);   
  gradient.addColorStop(0, color("orange"));   
  gradient.addColorStop(1, color(0, 0, 0, 0));   
  drawingContext.fillStyle = gradient;   
  ellipse(mouseX, mouseY, 400, 400);   
  noStroke();  
  
  let line1 = "WE THINK TOO MUCH";
  let line2 = "AND FEEL TOO LITTLE";
  
  let line1Width = textWidth(line1);
  let line2Width = textWidth(line2);
  
  let x1 = (windowWidth - line1Width) / 2;
  let x2 = (windowWidth - line2Width) / 2;
  let y1 = windowHeight / 2 - textAscent();
  let y2 = windowHeight / 2 + textDescent();
  
  // Grow the circle from the middle of "FEEL" if growFeel is true
  if (growFeel) {
    let feelX = x2 + textWidth("AND ") + textWidth("FEEL") / 2;
    let feelY = y2;
    let feelGradient = drawingContext.createRadialGradient(feelX, feelY, 0, feelX, feelY, feelRadius);   
    feelGradient.addColorStop(0, color("orange"));
    feelGradient.addColorStop(0.25, color("yellow"));
    feelGradient.addColorStop(1, color(255, 255, 0, 0)); // Yellow with 0% opacity
    //feelGradient.addColorStop(1, color(0, 0, 0, 0));   
    drawingContext.fillStyle = feelGradient;   
    ellipse(feelX, feelY, feelRadius, feelRadius);
    feelRadius += 5; // Increase the radius
  }
  
  // Draw the first line and check hover states
  let words1 = line1.split(" ");
  let x = x1;
  for (let i = 0; i < words1.length; i++) {
    let word = words1[i];
    let wordWidth = textWidth(word);
    
    // Check if the mouse is hovering over "THINK"
    if (word === "THINK" && mouseX > x && mouseX < x + wordWidth && mouseY > y1 - textAscent() / 2 && mouseY < y1 + textDescent() / 2) {
      fill("black");
    } else {
      fill("white");
    }
    
    text(word, x + wordWidth / 2, y1);
    x += wordWidth + textWidth(" "); // Move to the next word position
  }
  
  // Draw the second line and check hover states
  let words2 = line2.split(" ");
  x = x2;
  for (let i = 0; i < words2.length; i++) {
    let word = words2[i];
    let wordWidth = textWidth(word);
    
    // Check if the mouse is hovering over "FEEL"
    if (word === "FEEL" && mouseX > x && mouseX < x + wordWidth && mouseY > y2 - textAscent() / 2 && mouseY < y2 + textDescent() / 2) {
      fill("yellow");
    } else {
      fill("white");
    }
    
    text(word, x + wordWidth / 2, y2);
    x += wordWidth + textWidth(" "); // Move to the next word position
  }
}

function mousePressed() {
  let line1 = "WE THINK TOO MUCH";
  let x1 = (windowWidth - textWidth(line1)) / 2;
  let y1 = windowHeight / 2 - textAscent();
  let wordWidthThink = textWidth("THINK");
  
  // Check if the mouse is clicking on "THINK"
  if (mouseX > x1 + textWidth("WE ") && mouseX < x1 + textWidth("WE ") + wordWidthThink && mouseY > y1 - textAscent() / 2 && mouseY < y1 + textDescent() / 2) {
    flashThink = !flashThink; // Toggle the flashing state
  }
  
  let line2 = "AND FEEL TOO LITTLE";
  let x2 = (windowWidth - textWidth(line2)) / 2;
  let y2 = windowHeight / 2 + textDescent();
  let wordWidthFeel = textWidth("FEEL");
  
  // Check if the mouse is clicking on "FEEL"
  if (mouseX > x2 + textWidth("AND ") && mouseX < x2 + textWidth("AND ") + wordWidthFeel && mouseY > y2 - textAscent() / 2 && mouseY < y2 + textDescent() / 2) {
    growFeel = true; // Start growing the circle
    feelRadius = 0; // Reset the radius
  }
}
