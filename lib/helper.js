/* == HELPER FUNCTIONS == */
// Set the size of a DOM element
const setCssSize = (element, width, height) => {
    element.css("width", `${width}px`);
    element.css("height", `${height}px`);
}

// Set the position of our DOM element
const setCssPosition = (element, xPos, yPos) => {
    element.css("left", xPos);
    element.css("bottom", yPos);
}
