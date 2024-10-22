let rectWidth = 150; // Width of each rectangle
let rectHeight = rectWidth * 1.5; // Adjusted height based on a new ratio
let spacing = 50; // Increased spacing between rectangles
let totalWidth = rectWidth * 12 + spacing * 13; // Total width needed for all rectangles and spacing

function setup() {
  createCanvas(totalWidth, windowHeight);
}

function draw() {
  background("green"); // Ensure the background is redrawn

  for (let i = 0; i < 12; i++) {
    let x = spacing + i * (rectWidth + spacing); // Calculate x position for each rectangle
    let y = 50; // Align along the top of the screen with some margin

    // Draw the drop shadow
    fill(1, 50, 32); // Darker color for the shadow
    rect(x + 5, y + 5, rectWidth, rectHeight, 20); // Offset shadow with rounded corners

    // Draw the main card
    fill(255); // White color for the cards
    rect(x, y, rectWidth, rectHeight, 20); // Rounded corners with radius 20

    // Add red text at the top left and bottom right
    fill('red');
    textSize(24);
    textAlign(LEFT, TOP);
    text(i + 1, x + 10, y + 10); // Top left corner
    textAlign(RIGHT, BOTTOM);
    text(i + 1, x + rectWidth - 10, y + rectHeight - 10); // Bottom right corner
  }

  // Check if the mouse is hovering over the second card
  let secondCardX = spacing + 1 * (rectWidth + spacing);
  let secondCardY = 50;
  if (mouseX > secondCardX && mouseX < secondCardX + rectWidth && mouseY > secondCardY && mouseY < secondCardY + rectHeight) {
    // Display the paragraphs of text
    fill("white");
    textSize(12);
    textAlign(LEFT, CENTER);
    let textX = secondCardX; // Align left of the second card
    let textY = windowHeight / 5; // Center vertically
    let textContent = "Morning Class:\nI was briefed on what the class is like:\nHow we may have to relearn things we’ve learnt from our own field like graphic design, but that a main objective at the same time is to “be designers & learn something about code”. Andy also highlighted points like Codewords being about the web aesthetic as opposed to making traditionally affective websites and that creative coding is about.\n\nOne of the references given was Winnie Soon. Her artwork ‘Unerasable Characters II’ 2020” a digital artwork displayed on a wall visualising censored tweets was my first introduction into the possibilities of coding for a creative purpose.";
    text(textContent, textX, textY, 400, windowHeight); // Increased width for text wrapping
  }

  // Draw the title text at the bottom left
  fill("white");
  textSize(24);
  textAlign(LEFT, BOTTOM);
  text("Peran Curnow's CW SKO - s3944433", 10, windowHeight - 10); // Bottom left corner with some margin
}
