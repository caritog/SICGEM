import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: "",
                lastname: "",
                email: "",
                document: "",
                pass: "",
                passrepeat: "",
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

    handleClick() {
        //Datos usuaria
        sessionStorage.setItem("name", this.state.values.name)
        sessionStorage.setItem("lastname", this.state.values.lastname)
        sessionStorage.setItem("email", this.state.values.email)
        sessionStorage.setItem("document", this.state.values.document)
        sessionStorage.setItem("pass", this.state.values.pass)
        sessionStorage.setItem("passrepeat", this.state.values.passrepeat)

        //Cuando hacemos click en el botón, con Link navega a la otra vista
        document.querySelector("#registro").click();
    }

    render() {
        //Monitorendo lo que escriba la usuaria
        console.log("Los nombres completos son: ", this.state.values.name);
        console.log("Los apellidos completos son: ", this.state.values.lastname);
        console.log("El correo electrónico es: ", this.state.values.email);
        console.log("El número de identificación es: ", this.state.values.document);
        console.log("La contraseña es: ", this.state.values.pass);
        console.log("Repetir contraseña: ", this.state.values.passrepeat);

        return (
            <div className="container">
                <br />
                <section className="row">
                    <div className="col-md-12 cabecera">
                        <h1 className="text-center ">Nueva Cuenta</h1>
                        <p className="text-center">Regístrate y ayúdanos a ayudar.</p>
                        <p className="text-center" style={{ marginbottom: '60px' }} ><small className="font-italic text-secondary">Todos los campos marcados con <span className="font-weight-bold text-danger">*</span> son obligatorios.</small></p>
                    </div>
                </section>
                <form action="" className="main-form" method="POST">
                    <section className="row">
                        <fieldset className="col-md-12">
                            <h3>Datos básicos:</h3>
                        </fieldset>
                    </section>
                    <section className="row">
                        <section className="col-md-12">
                            <section className="row">
                                <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="name">Nombres Completos<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="name" type="text" className="form-control" name="name" placeholder="Escriba sus nombre" maxLength="128"  required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="lastname">Apellidos Completos<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="lastname" type="text" className="form-control" name="lastname" placeholder="Escriba sus apellidos" maxLength="128" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                            </section>

                            <section className="row">
                            <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="email">Correo electrónico<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="email" type="email" className="form-control" name="email" placeholder="email@email.com" maxLength="40" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                            <div className="col-md-6">
                                    <fieldset className="form_group">
                                        <label htmlFor="document">Número de documento<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="document" type="tel" className="form-control" name="document" placeholder="CC" minLength="7" maxLength="10" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                </section>
                                <section className="row">
       
                                <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="pass">Contraseña<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="pass" type="password" className="form-control" name="pass" placeholder="Máximo 10 caracteres" maxLength="20"  required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="passrepeat">Repita la contraseña<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="passrepeat" type="password" className="form-control" name="passrepeat" placeholder="Máximo 10 caracteres" maxLength="20" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                            </section>
                        </section>
                    </section>
                    <hr />

                    <section className="row">
                        <div className="col-md-12">

                            {/*Validación de datos antes de enviar el formulario*/}

                            {this.state.values.name !== ""
                                && this.state.values.lastname !== ""
                                && this.state.values.email !== ""
                                && this.state.values.document !== ""
                                && this.state.values.pass !== ""
                                && this.state.values.passrepeat !== ""
                                ?  <button type="submit" onClick={this.handleClick} className="btn btn-success" id="sendRegister" >
                                    Registrarse
                                  </button>

                                : <button type="submit" onClick={this.handleClick} className="btn btn-success" id="sendRegister" disabled>
                                    Registrarse
                                    </button>
                            }
                           <Link to="/register" className="d-none" id="registro"> </Link>
                        </div>
                    </section>
                </form>
                <div>
                    <br />
                    <br />
                    <footer className="container text-center">
                        <p>Todos los derechos reservados SICGEM © 2020.</p>
                    </footer>
                </div>
            </div>
        );
    };
}