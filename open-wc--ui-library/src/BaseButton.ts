import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('base-button')
export class BaseButton extends LitElement {
  static styles = css`
    button.base-btn {
      color: white;
      background: #2a63bf;
      border: 0px transparent;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.125);
      transition: background 250ms ease-in-out;
      margin: 5px;
    }

    button.base-btn:hover {
      cursor: pointer;
      background: #204b91;
    }
  `;
  @property({ type: String }) text = 'Base Button';

  render() {
    return html` <button class="base-btn">${this.text}</button> `;
  }
}
