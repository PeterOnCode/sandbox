import { html, LitElement } from 'lit';

export class BaseButton extends LitElement {
  render() {
    return html` <button class="base-btn">Click me</button> `;
  }
}
