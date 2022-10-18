// Make our grid before adding blocks
const gameWindow = new Window();

// Add 3 rows of blocks to the window
Block.makeRows(3).forEach(block => gameWindow.addBlock(block));

const user = new User(230, 10);
const ball = new Ball(50, 50);

gameWindow.addUser(user);
gameWindow.addBall(ball);

// // TODO: Find out why I coudln't make this work in jQuery syntax
// document.addEventListener('keydown', (event) => {
//     user.move(event);
// })

var keyState = {};    
// FIXME: Got it from here https://stackoverflow.com/questions/12273451/how-to-fix-delay-in-javascript-keydown
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

let direction;

function gameLoop() {
    if (keyState[37] || keyState[65]){
        direction = "left";
    } else if (keyState[39] || keyState[68]){
        direction = "right";
    } else {
        direction = null;
    }

    user.move(direction)

    // redraw/reposition your object here
    // also redraw/animate any objects not controlled by the user

    setTimeout(gameLoop, 10);
}    
gameLoop();