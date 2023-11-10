const canvas = document.querySelector('canvas[class="drawing"]');
const ctx = canvas.getContext('2d');
const size = 10;
const color = 'black';
canvas.addEventListener('click', (e) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, size / 2, 0, 2 * Math.PI);
    ctx.fill();
});