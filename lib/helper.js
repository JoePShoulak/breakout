/* == HELPER FUNCTIONS == */
// Set the size of a DOM element
const setSize = (element, width, height) => {
    element.css("width", `${width}px`);
    element.css("height", `${height}px`);
}

// Set the position of our DOM element
const setPosition = (element, xPos, yPos) => {
    element.css("left", xPos);
    element.css("bottom", yPos);
}
