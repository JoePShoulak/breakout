// Make our grid before adding blocks
const grid = new Grid();

// Add 3 rows of blocks to the grid
Block.makeRows(3).forEach(block => grid.addBlock(block));
