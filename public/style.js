// Define stylize().
function stylize() {
    // Get all .middle elements
    const middleElements = document.querySelectorAll('.middle');
    // Loop through .middle elements
    middleElements.forEach((middle) => {
        middle.style.marginLeft = `${innerWidth / 2 - middle.offsetWidth / 2}px`
    });

    // Do a similar thing for .topnav if the menu is overflowed.
    // Define overflow function
    function isOverflowing({scrollWidth, clientWidth, scrollHeight, clientHeight}){
        return scrollWidth > clientWidth || scrollHeight > clientHeight;
    }
    const header = document.querySelector('.page-header');
    if(isOverflowing(header)){
        // Make .change elements visible.
        // Get .change elements.
        const changeElements = document.querySelectorAll('.change');
        // Loop through .change elements.
        changeElements.forEach((changeElement) => {
            changeElement.style.display = 'visible';
        });
    }
}
// Call stylize().
stylize();
// Call stylize() on screenresize.
addEventListener('resize', stylize);