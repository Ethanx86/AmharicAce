class MobileDisplay extends HTMLElement{
    constructor(){
        super();
    }

    update(){
        if(innerWidth < 400){
            this.style.display = 'block';
        } else {
            this.style.display = 'none';
        }
    }

    connectedCallback(){
        this.update();
        addEventListener('resize', this.update.bind(this));
    }
}
customElements.define('mobile-display', MobileDisplay);