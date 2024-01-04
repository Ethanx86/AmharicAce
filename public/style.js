// Get page name.
// Find #page-name.
const pageName = document.getElementById('page-name');
// Get the innerHTML of #page-name.
const page = pageName.innerHTML;
// Define stylize().
function stylize() {
    const header = document.querySelector('.page-header');
    // Get all .middle elements
    const middleElements = document.querySelectorAll('.middle');
    // Loop through .middle elements
    middleElements.forEach((middle) => {
        middle.style.marginLeft = `${innerWidth / 2 - middle.offsetWidth / 2}px`
    });
}
// Call stylize().
stylize();
// Call stylize() on screenresize.
addEventListener('resize', stylize);