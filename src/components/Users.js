import React, { Component } from "react";
import User from "./User";

class Users extends Component {
    render() {
        return (
            <table className="table table-dark">
                <thead>

                    <tr>

                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <User />
                </tbody>
            </table> 
            ); 
    }
}

export default Users;