import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('base-button')
export class BaseButton extends LitElement {
  @property({ type: String }) text = 'Base Button';

  render() {
    return html` <button class="base-btn">${this.text}</button> `;
  }
}
