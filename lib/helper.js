const random = Math.random;
const sqrt = Math.sqrt;

const input = {
    left:  (keyState) => keyState[37] || keyState[65], // leftArrow and A
    right: (keyState) => keyState[39] || keyState[68]  // rightArrow and D
}

const getUserInput = () => {
    if (input.left(keyState)) return "left";
    if (input.right(keyState)) return "right";

    return null;
}

const randomUnitVector = (newMag = 1) => {
    const x = random() * 2 - 1;
    const y = random() * 2 - 1;

    const mag = sqrt(x**2 + y**2);

    return {
        x: x/mag*newMag, 
        y: y/mag*newMag
    };
}

const compareArrays = (array1, array2) => {
    return (
        array1.length === array2.length && 
        array1.every((el) => array2.includes(el))
    );
};
