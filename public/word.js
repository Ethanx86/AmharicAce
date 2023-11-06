class Word {
    constructor(){
        super();
    }

    connectedCallback(){
        const before = this.innerHTML.split('<meaning>')[0];
        const after = this.innerHTML.split('<meaning>')[1];
        this.innerHTML = `
            <details>
                <summary>${before}</summary>
                ${after}
            </details>
        `
    }
}

customElements.define('custom-word', Word);