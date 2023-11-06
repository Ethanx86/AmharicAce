class PageTitle extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {
      const before = this.innerHTML.split('<split>')[0];
      const after = this.innerHTML.split('<split>')[1];
        this.innerHTML = `
          <div style='border-style:none none solid none;border-width:2px;top:0px;position:fixed;width:100%;margin-left:5px;margin-top:2px;text-align:center;overflow-y:visible;'>
            <image src="./Logo.png"></image>
            <div style='top:0px;position:fixed;width:${10}px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
            ${before}
          </div>
            <b style="color:#b7111b; font-family:'Courier';font-size:28px;text-align: right;">Amharic Ace</b>
          </div>
          <div style='top:0px;position:fixed;width:${innerWidth - 10}px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
            ${after||''}
          </div>
          <br>
          <div style='height:28px'></div>
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
    this.innerHTML = `<a r><b>${this.innerHTML}</b></a>`;
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