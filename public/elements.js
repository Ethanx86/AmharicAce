class PageTitle extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const before = this.innerHTML.split('<split>')[0];
    const after = this.innerHTML.split('<split>')[1];
    this.innerHTML = '';
    this.innerHTML = `
      <div style='top:0px;position:fixed;width:100%;margin-left:5px;margin-top:2px;text-align:center;overflow-y:visible;'>
        <image src="./assets/images/Logo.png"></image>
        <div style='top:0px;position:fixed;width:10px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
          ${before}
        </div>
        <b style="color:#b7111b; font-family:'Courier';font-size:28px;text-align: right;">Amharic Ace</b>
      </div><wbr>
      <div style='top:0px;position:fixed;width:${innerWidth - 10}px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
        ${after || ''}
      </div>
      <br>
      <div style='height:14px;border-style:none none solid none;border-width:2px;position:relative;'></div>
      <div style='height:28px;'></div>
    `;
  }
 updateTitle() {
    const before = this.innerHTML.split('<split>')[0];
    const after = this.innerHTML.split('<split>')[1];

    const pageTitle = `
      <div style='top:0px;position:fixed;width:100%;margin-left:5px;margin-top:2px;text-align:center;overflow-y:visible;'>
        <image src="assets/images/Logo.png"></image>
        <div style='top:0px;position:fixed;width:10px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
          ${before}
        </div>
        <b style="color:#b7111b; font-family:'Courier';font-size:28px;text-align: right;">Amharic Ace</b>
      </div><wbr>
      <div style='top:0px;position:fixed;width:${window.innerWidth - 10}px;margin-right:5px;margin-top:2px;height:28px;text-align:right;font-size:28px;'>
        ${after || ''}
      </div>
      <br>
      <div style='height:14px;border-style:none none solid none;border-width:2px;position:relative;'></div>
      <div style='height:28px;'></div>
    `;
    this.innerHTML = pageTitle;
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
    this.innerHTML = `<b r>${this.innerHTML}</b>`;
  }
  attributeChangedCallback(name, _, newValue) {
    if (name === 'href') {
      this.onclick = () => {open(newValue)};
    }
  }
}
customElements.define('page-title', PageTitle);
customElements.define('custom-link', Link);