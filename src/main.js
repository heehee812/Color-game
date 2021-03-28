import Component from  './component.js';
import Navbar from  './navbar.js';
import Board from  './board.js';
import Deck from  './deck.js';
import Reset from  './reset.js';

import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.navbar = new Navbar(root.querySelector('.navbar'));

        //
        this.navbar.on('click', this.handleNavbarClick.bind(this));

        this.deck = new Deck(root.querySelector('.deck'));
        this.deck.on('wrongClick', this.handleDeckWrongClick.bind(this));
        this.deck.on('rightClick', this.handleDeckRightClick.bind(this));

        this.board = new Board(root.querySelector('.board'), this.deck.getPickedColor());

        this.reset = new Reset(root.querySelector('.reset'));
        this.reset.on('click', this.handleResetClick.bind(this), this.navbar.mode);
    }

    ///
    handleNavbarClick(firer, mode){
        this.handleResetClick(firer, mode)
    }

    handleDeckWrongClick(firer) {
        this.board.showWrongMessage();
    }

    handleDeckRightClick(firer, pickedColor) {
        this.root.style.backgroundColor = pickedColor;
        this.board.showCorrectMessage();
        this.reset.showPlayAgain();
        clearInterval(this.id);
        this.board.showTimer("");
    }

    handleResetClick(firer) {
        this.root.style.backgroundColor = "#232323";

        ///
        if(this.navbar.mode== "easy"){
            this.deck.resetEasy();
        }
        else{
            this.deck.resetHardNightmare();
        }
        this.board.reset(this.deck.getPickedColor(), this.navbar.mode);
        clearInterval(this.id);
        this.handleTimer();
        firer.reset();
    }

    handleTimer(){
        this.timer= 5;
        if(this.navbar.mode== "nightmare"){
            this.board.showTimer(" "+ this.timer);
            this.id= setInterval(this.tick.bind(this), 1000);
        }
        else{
            clearInterval(this.id);
            this.board.showTimer("");
        }
    }

    tick(){
        if(this.timer== 1){
            this.board.showTimer("");
            clearInterval(this.id);
            this.board.showTimeOutMessage();
            this.deck.handleTimeout();
            this.reset.showPlayAgain();
            this.root.style.backgroundColor = this.deck.getPickedColor();
            return;
        }
        --this.timer;
        this.board.showTimer(" "+ this.timer);
        this.blink();
    }

    blink(){
        this.blink_white();
        setTimeout(this.blink_black.bind(this), 100);
    }

    blink_white(){
        this.root.style.backgroundColor= "rgb(180, 175, 175)";
    }

    blink_black(){
        this.root.style.backgroundColor= "#232323";
    }
}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};
