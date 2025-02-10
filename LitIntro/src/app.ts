import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './CustomHeader'
import './CustomFooter'
import './CustomContainer'


/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-root')
export class MyRoot extends LitElement {

  @property()
  name  = 'Click on the Vite and Lit logos to learn more'

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <custom-header></custom-header>
      <custom-container></custom-container>
      <custom-footer></custom-footer>
    `
  }


  static styles = css`
    :host {
      height : 100vh;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      display: flex;
      flex-direction: column;
    }

    
  `
}
