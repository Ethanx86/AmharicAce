'use-strict';
const canvas = document.querySelector('canvas[class="drawing"]');
const ctx = canvas.getContext('2d');
const size = 7;
const color = 'black';
var dragging = false;
canvas.addEventListener('mousedown',_=>dragging=true);
canvas.addEventListener('mouseup',_=>dragging=false);
canvas.addEventListener('mousemove', (e) => {
    if(dragging){
        const rect = canvas.getBoundingClientRect();
        ctx.fillStyle = color;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
        ctx.fill();
    }
});