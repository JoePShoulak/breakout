/* == GRID CLASS == */
class Grid {
    /* These will never change from block to block and 
       should be able to be referenced without an object */
    static width = 560;
    static height = 300;
    static size = [Grid.width, Grid.height];

    constructor() {
        // Create the DOM element
        this.element = $('<div>').addClass('grid');

        // Set the size css here so we're not coding in our stylesheet
        setSize(this.element, ...Grid.size)

        // Put the grid into the DOM
        $('body').append(this.element);
    }

    addBlock = (block) => {
        this.element.append(block.element);
    }
}
