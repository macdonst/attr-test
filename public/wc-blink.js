/* eslint no-undef: 0 */
class WCBlink extends HTMLElement {
  constructor () {
    super()
    const template = document.createElement('template')
    template.innerHTML = WCBlink.template()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(document.importNode(template.content, true))
  }

  get lowercase() {
    return this.getAttribute('lowercase');
  }

  set lowercase(val) {
    this.setAttribute('lowercase', val);
  }

  get camelCase() {
    return this.getAttribute('camelCase');
  }

  set camelCase(val) {
    this.setAttribute('camelCase', val);
  }

  get kebabCase() {
    return this.getAttribute('kebab-case');
  }

  set kebabCase(val) {
    this.setAttribute('kebab-case', val);
  }
  get snake_case() {
    return this.getAttribute('snake_case');
  }

  set snake_case(val) {
    this.setAttribute('snake_case', val);
  }

  static get observedAttributes() {
    return ['lowercase', 'camelCase', 'kebab-case', 'snake_case'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
  }

  static template () {
    return `
        <style>
        .blink {
          animation: 2s linear infinite condemned_blink_effect;
        }
        @keyframes condemned_blink_effect {
          0% {
            visibility: hidden;
          }
          50% {
            visibility: hidden;
          }
          100% {
            visibility: visible;
          }
        }
        </style>
        <p class="blink" style="width: inherit;"><span><slot></slot></span></p>
      `
  }
}

customElements.define('wc-blink', WCBlink)
