import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./UsersTable";

@customElement("custom-container")
export class CustomContainer extends LitElement{

    render(){
        return html `
        <div><users-table></users-table>
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
        padding : 2rem;
        }

    `
}


