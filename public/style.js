// Get all .middle elements
const middleElements = document.querySelectorAll('.middle');
// Loop through .middle elements
middleElements.forEach((middle) => {
    middle.style.marginLeft = `${innerWidth / 2 - middle.offsetWidth / 2}px`
});