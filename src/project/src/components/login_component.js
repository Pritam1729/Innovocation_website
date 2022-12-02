import React, { Component } from "react";
//import {Link} from "react-router-dom";
import './login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./Home";
        }
        else {
          alert("Wrong email or password")
        }
      });
  }
  render() {
    return (
      <div className="logincontainer">
        <div className="loginsucessful">
          <form onSubmit={this.handleSubmit}>
            <div className="loginheader">
              <h3>Innovocation</h3>
              <h3>Sign In</h3>
            </div>
            <div className="mainpage">
              <div className="mb-3">
                <label>Email :</label>
                <input
                  type="email"
                  className="form-control1"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>Password  :</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn-btn-primary">
                  Submit
                </button>
                {/* <Link to = "#" className = "btn btn-primary">
            Submit
          </Link> */}
              </div>
              <p className="forgot-password-text-right1">
                If not registered : <a href="/sign-up">Sign Up</a>
              </p>
            </div>
          </form>

        </div>
      </div>
    );
  }
}