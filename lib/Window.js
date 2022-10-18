/* == GRID CLASS == */
class Window extends GameElement {
    static width = 560;
    static height = 300;

    constructor() {
        super();

        this.element = this.newDiv("grid");
        
        
        this.blocks = [];
        this.user;
        this.ball;

        this.setSize(Window.width, Window.height);
        this.setCssSize();

        $('body').append(this.element);
    }

    addBlock = (block) => {
        this.element.append(block.element);
        this.blocks = [...this.blocks, block];
        block.window = this;
    }

    addUser = (user) => {
        this.element.append(user.element);
        this.user = user;
        user.window = this;
    }

    addBall = (ball) => {
        this.element.append(ball.element);
        this.ball = ball;
        ball.window = this;
    }
}
