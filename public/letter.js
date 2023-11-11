'use-strict';
const canvas = document.querySelector('canvas[class="drawing"]');
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
});
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
        this.canvas = document.createElement('canvas');
        this.appendChild(this.canvas);
    }
    static get observedAttributes(){
        return ['char', 'width', 'height', 'color', 'size'];
    }

    #checkDrawingElementData(){
        if(this.drawingElementData.char && this.drawingElementData.color && this.drawingElementData.size){

        }
    }

    attributeChangedCallback(name, _, newValue){
        switch(name){
            case 'char':
                this.drawingElementData
        }
    }
}