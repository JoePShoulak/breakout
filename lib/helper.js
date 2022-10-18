const input = {
    left:  (keyState) => keyState[37] || keyState[65], // leftArrow and A
    right: (keyState) => keyState[39] || keyState[68]  // rightArrow and D
}

const getUserInput = () => {
    if (input.left(keyState)) return "left";
    if (input.right(keyState)) return "right";

    return null;
}