// Make our grid before adding blocks
const grid = new Grid();

// Define our blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
];

// Add our blocks to the grid
blocks.forEach(block => {
    grid.addBlock(block);
});
