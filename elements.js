class PageTitle extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
          <div style='border-style:none none solid none;border-width:2px;top:0px;position:fixed;width:100%;margin-left:5px;margin-top:2px;text-align:center;'>
            <image src="./Logo.png"></image>
            <b style="color:#b7111b; font-family:'Courier';font-size:28px;text-align: right;">Amharic Ace</b>
          </div>
          <div style='top:0px;position:fixed;width:${innerWidth - 10}px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
            ${this.innerHTML}
          </div>
        `;
    }
}

class Link extends HTMLElement{
  constructor(){
    super();
  }

  static get observedAttributes() {
    return ['href'];
  }

  connectedCallback(){
    this.innerHTML = `
      <a href="${this.href}" style="text-decoration: none;" r>
        <b>${this.innerHTML}</b>
      </a>
    `;
  }

  attributeChangedCallback=(name, oldValue, newValue)=>name==='href'?this.querySelector('a').setAttribute('href',newValue):this.querySelector('a').href=this.href;
}
customElements.define('page-title', PageTitle);
customElements.define('custom-link', Link);