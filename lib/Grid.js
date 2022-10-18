/* == GRID CLASS == */
class Grid {
    /* These will never change from grid to grid and 
       should be able to be referenced without an object */
    /* WARNING: Styling is done around these values. 
       Changing them WILL affect the look of the game. */
    static width = 560;
    static height = 300;
    static size = [Grid.width, Grid.height];

    constructor() {
        // Create the DOM element
        this.element = $('<div>').addClass('grid');

        // Empty array to store our blocks
        this.blocks = [];

        // Set the size css here so we're not coding in our stylesheet
        setSize(this.element, ...Grid.size);

        // Put the grid into the DOM
        $('body').append(this.element);
    }

    addBlock = (block) => {
        this.element.append(block.element);
        this.blocks = [...this.blocks, block];
    }
}
