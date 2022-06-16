import React, { Component } from "react";

class User extends Component {

    render(){
        return(
            <tr>
                <td>1</td>
                <td>Salah Birsel</td>
                <td>birsel@gmail.com</td>
                <td>
                    <button class ="btn btn-danger">Delete</button>
                    </td>
            </tr>
        );
    }
}
export default User;