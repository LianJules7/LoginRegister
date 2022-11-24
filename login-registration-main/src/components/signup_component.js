import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: "",
      apellidos: "",
      telefono:"",
      documento:"",
      correo: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { nombres, apellidos,telefono, documento, correo, password } = this.state;
    console.log(nombres, apellidos,telefono, documento, correo, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nombres,
        correo,
        apellidos,
        telefono, 
        documento,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
          alert("register successful");
          window.location.href = "./sign-in";
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Registrate</h3>

        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => this.setState({ nombres: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => this.setState({ apellidos: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Telefono</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
            onChange={(e) => this.setState({ telefono: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Documento</label>
          <input
            type="text"
            className="form-control"
            placeholder="Document Number"
            onChange={(e) => this.setState({ documento: e.target.value })}
          />
        </div>

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

        <div className="d-grid">
          <button type="submit" className="btn btn-secondary">
            Registrate
          </button>
        </div>
        <p className="forgot-password text-right">
          Ya estás registrado? <a href="/sign-in">Inicia sesion</a>
        </p>
      </form>
    );
  }
}
