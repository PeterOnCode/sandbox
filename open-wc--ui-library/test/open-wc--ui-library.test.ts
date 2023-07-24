import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { OpenWcUiLibrary } from '../src/OpenWcUiLibrary.js';
import '../src/open-wc--ui-library.js';

describe('OpenWcUiLibrary', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<OpenWcUiLibrary>(html`<open-wc--ui-library></open-wc--ui-library>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<OpenWcUiLibrary>(html`<open-wc--ui-library></open-wc--ui-library>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<OpenWcUiLibrary>(html`<open-wc--ui-library header="attribute header"></open-wc--ui-library>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<OpenWcUiLibrary>(html`<open-wc--ui-library></open-wc--ui-library>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
