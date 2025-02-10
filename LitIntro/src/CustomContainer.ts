import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("custom-container")
export class CustomContainer extends LitElement{

    render(){
        return html `
        <div><h3>Hii this is from container</h3>
        </div>
        `;
    }

    static styles = css`
        :host{ 
        all : initial;
        flex:1; 
        }
        div{
        display: flex;
        height:100%;
        width:100%;
        justify-content :center;
        align-items :center;
        }

    `
}


