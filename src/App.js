import React, { Component } from "react";
import AddUser from "./components/AddUser"; 
import Users from "./components/Users";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id : 1,
          name : "Mert Kamalı",
          email : "mert@gmail.com"
        },
        {
          id : 2,
          name : "Oğuz Artıran",
          email : "oguz@gmail.com"
        },
        {
          id : 3,
          name : "Tolgahan Gencer",
          email : "gencer@gmail.com"
        },
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <h4>User App</h4>
        <hr />
        <AddUser />
        <hr />
        <Users users = {this.state.users}/>
      </div>
    )
  }
}

export default App;
