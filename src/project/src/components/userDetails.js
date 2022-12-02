import React, { Component } from "react";
import './userdetails.css';


export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div className = "usercontainer">
      <div className = "Userdetails">
      <h1 className = "headeruserdetails">Account Details</h1>
      <div className = "mainuserpage">
        <h1 className = "nameuser">Name : <span className = "namespan">{this.state.userData.fname}</span></h1>
        <h1 className = "lastname">last name: <span className = "lastspan" >{this.state.userData.lname}</span></h1>
        <h1 className = "emailuser">Email: <span className = "emailspan">{this.state.userData.email}</span></h1>
      </div>
      <div className = "homebuttonuser">
          CLick here to <a href = "/Home" className = "userlink">Home</a>
      </div>
      </div>
      </div>
    );
  }
}