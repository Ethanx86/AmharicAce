class Word {
    constructor(){
        super();
    }

    connectedCallback(){
        const before = this.innerHTML.split('<meaning>')[0];
        const after = this.innerHTML.split('<meaning>')[1];
    }
}