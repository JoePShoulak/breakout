// Make our grid before adding blocks
const gameWindow = new Window();

// Add 3 rows of blocks to the window
Block.makeRows(3).forEach(block => gameWindow.addBlock(block));

gameWindow.addUser(new User(230, 10));

