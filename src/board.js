import Component from  './component.js';

import './board.css';

/*
 * [Event name: params]
 * click: this, color
 */
export default class Board extends Component {
    static getRootClass() {
        return '.board';
    }

    constructor(root, color) {
        super(root);
        this.colorDisplay = root.querySelector('.color-picked');
        this.messageDisplay = root.querySelector('.message');
        this.timerDisplay= root.querySelector('.timer');
        this.reset(color, "hard");
    }

    reset(color, mode) {
        this.colorDisplay.textContent = color;
        this.messageDisplay.textContent = "What's the Color?";
    }

    showColor(color) {
        this.colorDisplay.textContent = color;
    }

    showCorrectMessage() {
        this.messageDisplay.textContent = "Correct!";
    }

    showWrongMessage() {
        this.messageDisplay.textContent = "Try Again";
    }

    showTimeOutMessage() {
        this.messageDisplay.textContent= "TIMEOUT!"
    }

    showTimer(timer){
        this.timerDisplay.textContent = timer;
    }
}
