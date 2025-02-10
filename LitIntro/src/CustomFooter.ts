import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement("custom-footer")
export class CustomFooter extends LitElement{

    render(){
        return html `
        <div>
        <p>Company Title</p>
        </div>`;
    }

    static styles = css`
        :host{ 
            all : initial;
            background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
        }
        div{   
            padding-inline : 0.8rem ;
            display : flex;
            justify-content : space-between;
            align-items:center;
        }
    `
}


