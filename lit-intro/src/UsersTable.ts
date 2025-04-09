import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { UsersAPIService } from "./UsersAPIService";
// import {users} from "./usersData";

@customElement("users-table")
export class UsersTable extends LitElement{

    private api = new UsersAPIService();
    @state() private users : any[] = [];

    async connectedCallback() {
        super.connectedCallback();
        const data = await this.api.getAllUsers();
        this.users  = data.users || [];
    }
    render(){
        return html `
            <div class="container">  
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Gender</td>
                        <td>Age</td>
                        <td>Role</td>
                    </tr>
                </thead>
                <tbody>
                   ${this.users.length > 0 ? this.users.map(user => html`
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.firstName}</td>
                                <td>${user.lastName}</td>
                                <td>${user.gender}</td>
                                <td>${user.age}</td>
                                <td>${user.role}</td>
                            </tr>
                        `) : html`
                            <tr>
                                <td colspan="6">No users found</td>
                            </tr>
                        `}
                </tbody>
            </table>
            </div>
        `;
    }

    static styles = css`
        :host{ 
        all : initial;
        flex:1; 
        }

        .container{
        height:calc(100vh - 8.5rem);
        overflow-y: auto; 
        }
        table {
        width: 100%;
        border-collapse: collapse;
        text-align:center;
        }


        table thead {
        background: linear-gradient(to right, #48c6ef 0%, #8da2f0 100%);
        color: white;
        cursor: pointer;
        font-weight: bold;
        }

        td{
        padding:.50rem;
        }
    `
}


