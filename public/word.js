class Word extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        const before = this.innerHTML.split('<meaning>')[0];
        const after = this.innerHTML.split('<meaning>')[1];
        this.innerHTML = `<details>
            <summary style='summary::-webkit-details-marker:display:none;list-style:none;'>${before}</summary>
            ${after}
        </details>`;
        this.childNodes[0].addEventListener('mouseover', () => {
            this.childNodes[0].open = true;
        });

        this.childNodes[0].addEventListener('mouseleave', () => {
            this.childNodes[0].open = false;
        });
    }
}

customElements.define('custom-word', Word);