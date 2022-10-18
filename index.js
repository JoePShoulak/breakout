// Make our grid before adding blocks
const gameWindow = new Window();

// Add 3 rows of blocks to the window
Block.makeRows(3).forEach(block => gameWindow.addBlock(block));

const user = new User(230, 10);

gameWindow.addUser(user);

// TODO: Find out why I coudln't make this work in jQuery syntax
document.addEventListener('keydown', user.move)
