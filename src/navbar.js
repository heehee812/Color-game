import Component from './component.js';

import './navbar.css';

/*
 * [Event name: params]
 * click: this, mode
 */
export default class Navbar extends Component {
    static getRootClass() {
        return '.navbar';
    }

    constructor(root) {
        super(root);

        ///
        var easy= root.querySelector("#easy");
        easy.addEventListener("click", this.handleDomClickEasy.bind(this));
        var hard= root.querySelector("#hard");
        hard.addEventListener("click", this.handleDomClickHard.bind(this));
        var nightmare= root.querySelector("#nightmare");
        nightmare.addEventListener("click", this.handleDomClickNightmare.bind(this));

        this.hardButtonChange();

        this.brand = root.querySelector('.brand');
        this.mode= "hard";
        this.reset();
    }

    easyHover(){
        easy.addEventListener('mouseenter', e => {
            if(this.mode!= "easy")
                easy.style.color= "steelblue";
        });
        easy.addEventListener('mouseleave', e => {
            if(this.mode!= "easy")
                easy.style.color= "#484848";
        });
    }

    hardHover(){
        hard.addEventListener('mouseenter', e => {
            if(this.mode!= "hard")
                hard.style.color= "steelblue";
        });
        hard.addEventListener('mouseleave', e => {
            if(this.mode!= "hard")
                hard.style.color= "#484848";
        });
    }

    nightmareHover(){
        nightmare.addEventListener('mouseenter', e => {
            if(this.mode!= "nightmare")
                nightmare.style.color= "steelblue";
        });
        nightmare.addEventListener('mouseleave', e => {
            if(this.mode!= "nightmare")
                nightmare.style.color= "#484848";
        });
    }

    reset() {
        this.easyHover();
        this.hardHover();
        this.nightmareHover();
    }

    ///
    handleDomClickEasy(e) {
        this.mode= "easy"
        this.fire('click', this.mode);
        this.easyButtonChange();
    }

    handleDomClickHard(e) {
        this.mode= "hard"
        this.fire('click', this.mode);
        this.hardButtonChange();
    }

    handleDomClickNightmare(e) {
        this.mode= "nightmare"
        this.fire('click', this.mode);
        this.nightmareButtonChange();
    }

    easyButtonChange(){
        easy.style.backgroundColor= "steelblue";
        easy.style.color= "white";
        hard.style.backgroundColor= "white";
        hard.style.color= "#484848";
        nightmare.style.backgroundColor= "white";
        nightmare.style.color= "#484848";
    }

    hardButtonChange(){
        hard.style.backgroundColor= "steelblue";
        hard.style.color= "white";
        easy.style.backgroundColor= "white";
        easy.style.color= "#484848";
        nightmare.style.backgroundColor= "white";
        nightmare.style.color= "#484848";
    }

    nightmareButtonChange(){
        nightmare.style.backgroundColor= "steelblue";
        nightmare.style.color= "white";
        hard.style.backgroundColor= "white";
        hard.style.color= "#484848";
        easy.style.backgroundColor= "white";
        easy.style.color= "#484848";
    }
}
