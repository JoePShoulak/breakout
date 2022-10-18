/* == GRID CLASS == */
class Window extends GameElement {
    static width = 560;
    static height = 300;

    constructor() {
        super();

        this.width = Window.width;
        this.height = Window.height;
        this.size = [this.width, this.height];
        // Create the DOM element
        this.element = $('<div>').addClass('grid');

        // Empty array to store our blocks
        this.blocks = [];
        this.user;

        // Set the size css here so we're not coding in our stylesheet
        this.setCssSize();

        // Put the grid into the DOM
        $('body').append(this.element);
    }

    addBlock = (block) => {
        this.element.append(block.element);
        this.blocks = [...this.blocks, block];
    }

    addUser = (user) => {
        this.element.append(user.element);
        this.user = user;
    }
}
