import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("custom-header")
export class CustomHeader extends LitElement{

    render(){
        return html `
        <header>
        <h2>Company Title</h2>  
        <ul>
        <li>First items</li>
        <li>Second items</li>
        </ul>
        </header>
        `;
    }

    static styles = css`
        :host{ all : initial; }
        header {
            padding-inline : .8rem;
            display : flex;
            justify-content : space-between;
            align-items : center;
            background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
        }

        ul{
            list-style:none;
        }
        li{
            display:inline;
             padding-inline : .8rem;
            color: black;
            font-weight : bold;
        }
    `
}


