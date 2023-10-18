class PageTitle extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
      const before = this.innerHTML.split('<split>')[0];
      const after = this.innerHTML.split('<split>')[1];
        this.innerHTML = `
          <div style='border-style:none none solid none;border-width:2px;top:0px;position:fixed;width:100%;margin-left:5px;margin-top:2px;text-align:center;'>
            <image src="./Logo.png"></image>
            <div style='top:0px;position:fixed;width:${10}px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
            ${before}
          </div>
            <b style="color:#b7111b; font-family:'Courier';font-size:28px;text-align: right;">Amharic Ace</b>
          </div>
          <div style='top:0px;position:fixed;width:${innerWidth - 10}px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
            ${after}
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
    const a = document.createElement('a');
    const b = document.createElement('b');
    a.appendChild(b);
    this.appendChild(a);
    a.href = this.href;
    this.a = a;
    this.a.r = true;
  }

  attributeChangedCallback(name, _, newValue) {
    if (name === 'href') {
      this.a.setAttribute('href', newValue);
    }
  }
}

class MobilePhone extends HTMLElement{
  constructor(){
    super();
  }
}
customElements.define('page-title', PageTitle);
customElements.define('custom-link', Link);
customElements.define('mobile-phone', MobilePhone);