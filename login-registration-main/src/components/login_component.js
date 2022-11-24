import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { correo, password } = this.state;
    console.log(correo, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        correo,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <h3>Inicia sesion</h3>

        <div className="mb-3">
          <label>Correo Electronico</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ correo: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
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
              Recuerdame
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-secondary">
            Aceptar
          </button>
        </div>
        <p className="forgot-password text-right">
          No tienes cuenta?<a href="/sign-up">Registrate</a>
        </p>
      </form>
    );
  }
}
