const TICK_LENGTH = 10;
var keyState = {};

const gameWindow = new Window();
const user = new User(230, 10);
const ball = new Ball(50, 50);

Block.makeRows(3).forEach(block => gameWindow.addBlock(block));

gameWindow.addUser(user);
gameWindow.addBall(ball);

// FIXME: Got it from here https://stackoverflow.com/questions/12273451/how-to-fix-delay-in-javascript-keydown
window.addEventListener('keydown', (e) => keyState[e.keyCode || e.which] = true, true);    
window.addEventListener('keyup',   (e) => keyState[e.keyCode || e.which] = false, true);

function gameLoop() {
    user.move(getUserInput());

    setTimeout(gameLoop, TICK_LENGTH);
}    

gameLoop();
