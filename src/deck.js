import Component from './component.js';
import Card from './card.js';

import './deck.css';

/*
 * [Event name: params]
 * wrongClick: this
 * rightClick: this, pickedColor
 */
export default class Deck extends Component {
    static getRootClass() {
        return '.deck';
    }

    constructor(root) {
        super(root);

        this.gameOver = false;
        this.cards = [];
        const els = root.querySelectorAll(Card.getRootClass());
        for (let el of els) {
            const card = new Card(el);
            card.on('click', this.handleCardClick.bind(this));
            this.cards.push(card);
        }
        this.pickedColor = this.pickColor(this.cards.length);
    }

    ///
    resetHardNightmare() {
        this.showCard();
        this.gameOver = false;
        for (let card of this.cards)
            card.reset();
        this.pickedColor = this.pickColor(this.cards.length);
    }

    ///
    resetEasy(){
        this.hideCard();
        this.gameOver = false;
        this.hncard= this.cards.slice(0, 3);
        for (let card of this.hncard)
            card.reset();
        this.pickedColor = this.pickColor(this.hncard.length);
    }

    getPickedColor() {
        return this.pickedColor;
    }

    handleCardClick(firer, color) {
        if (this.gameOver)
            return;

        if (color === this.pickedColor) {
            for (let card of this.cards)
                card.fadeIn("#FFF");
            this.gameOver = true;
            this.fire('rightClick', this.pickedColor);
        } else {
            firer.fadeOut();
            this.fire('wrongClick');
        }
    }

    handleTimeout(){
        for (let card of this.cards)
            card.fadeIn("#FFF");
        this.gameOver = true;
    }

    pickColor(length) {
        const random = Math.floor(Math.random() * length);
        return this.cards[random].getColor();
    }

    hideCard(){
        var hncard= document.getElementsByClassName("cardd");
        for(let c of hncard)
            c.style.display= "none";
    }

    showCard(){
        var hncard= document.getElementsByClassName("cardd");
        for(let c of hncard)
            c.style.display= "block";
    }
}
