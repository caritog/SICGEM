import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Prueba extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        pregunta1: "",
        pregunta2: "",
        pregunta3: "",
        pregunta4: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleClick(){
    sessionStorage.setItem("pregunta1", this.state.values.pregunta1)
    sessionStorage.setItem("pregunta2", this.state.values.pregunta2)
    sessionStorage.setItem("pregunta3", this.state.values.pregunta3)
    sessionStorage.setItem("pregunta4", this.state.values.pregunta4)
    document.querySelector("#resultado").click();
  }

  render() {
    console.log("La pregunta 1 es: ", this.state.values.pregunta1);
    console.log("La pregunta 2 es: ", this.state.values.pregunta2);
    console.log("La pregunta 3 es: ", this.state.values.pregunta3);
    console.log("La pregunta 4 es: ", this.state.values.pregunta4);
    return (
      <>
        <div className="d-flex">
          <h6>Si</h6>
          <input
            type="radio"
            name="pregunta1"
            value="Si"
            onChange={this.handleChange}
            className="mr-5"
          />
          <h6>No</h6>
          <input
            type="radio"
            name="pregunta1"
            value="No"
            onChange={this.handleChange}
            className="mr-5"
          />
          <h6>A veces</h6>
          <input
            type="radio"
            name="pregunta1"
            value="a veces"
            onChange={this.handleChange}
          />
        </div>
        <div className="d-flex">
          <h6>Si</h6>
          <input
            type="radio"
            name="pregunta2"
            value="Si"
            onChange={this.handleChange}
            className="mr-5"
          />
          <h6>No</h6>
          <input
            type="radio"
            name="pregunta2"
            value="No"
            onChange={this.handleChange}
            className="mr-5"
          />
          <h6>A veces</h6>
          <input
            type="radio"
            name="pregunta2"
            value="a veces"
            onChange={this.handleChange}
          />
        </div>
        <div className="d-flex">
          <h6>Si</h6>
          <input
            type="radio"
            
            name="pregunta3"
            value="Si"
            onChange={this.handleChange}
            className="mr-5"
          />
          <h6>No</h6>
          <input
            type="radio"
            
            name="pregunta3"
            value="No"
            onChange={this.handleChange}
            className="mr-5"
          />
          <h6>A veces</h6>
          <input
            type="radio"
            
            name="pregunta3"
            value="a veces"
            onChange={this.handleChange}
          />
        </div>
        <div className="d-flex">
          <h6>Si</h6>
          <input
            type="radio"
            
            name="pregunta4"
            value="Si"
            onChange={this.handleChange}
            className="mr-5"
          />
          <h6>No</h6>
          <input
            type="radio"
            
            name="pregunta4"
            value="No"
            onChange={this.handleChange}
            className="mr-5"
          />
          <h6>A veces</h6>
          <input
            type="radio"
            
            name="pregunta4"
            value="a veces"
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleClick} className="bg-success text-white">
              Enviar
          </button>
          <Link to="/response" className="d-none" id="resultado">

          </Link>
        </div>
      </>
    );
  }
}
