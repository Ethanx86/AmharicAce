/*const canvas = document.querySelector('canvas[class="drawing"]');
const ctx = canvas.getContext('2d');
const size = 7;
const color = '#b7111b';
var dragging = false;
canvas.addEventListener('mousedown',_=>dragging=true);
canvas.addEventListener('mouseup',_=>dragging=false);
canvas.addEventListener('mousemove', (e) => {
    if(dragging){
        const rect = canvas.getBoundingClientRect();
        ctx.fillStyle = color;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        console.log(`${x}, ${y}`);
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
        ctx.fill();
    }
});*/
class DrawingElementData {
    constructor(){
        this.char = undefined;
        this.color = undefined;
        this.size = undefined;
    }
}

class DrawingElement extends HTMLElement{
    #dragging = false;

    constructor(){
        super();
        this.drawingElementData = new DrawingElementData();
    }

    connectedCallback(){
        this.ctx = this.canvas.getContext('2d');
        this.appendChild(this.canvas);
    }
    static get observedAttributes(){
        return ['char', 'width', 'height', 'color', 'size'];
    }

    #checkDrawingElementData(){
        if(this.drawingElementData.char && this.drawingElementData.color && this.drawingElementData.size){
            this.canvas.addEventListener('mousemove', (e) => {
                if(this.#dragging){
                    const x = e.clientX - canvas.getBoundingClientRect().left;
                    const y = e.clientY - canvas.getBoundingClientRect().top;
                    this.ctx.fillStyle = this.drawingElementData.color;
                    this.ctx.arc(x, y, this.drawingElementData.size, 0, 2 * Math.PI);
                    this.ctx.fill();
                }
            });
        }
    }

    attributeChangedCallback(name, _, newValue){
        this.canvas = this.canvas ? this.canvas : document.createElement('canvas');
        this.ctx = this.ctx ? this.ctx : this.canvas.getContext('2d');
        switch(name){
            case 'char':
                this.drawingElementData.char = newValue;
                this.#checkDrawingElementData();
                break;
            case 'width':
                this.canvas.width = parseInt(newValue);
                break;
            case 'height':
                this.canvas.height = parseInt(newValue);
                break;
            case 'color':
                this.drawingElementData.color = newValue;
                this.#checkDrawingElementData();
                break;
            case 'size':
                this.drawingElementData.size = parseFloat(newValue);
                this.#checkDrawingElementData();
        }
    }
}
customElements.define('draw-letter', DrawingElement);