import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                namelog: "",
                lastname: "",
                email_log: "",
                documento: "",
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

    handleClick(e) {

        //Para evitar el procesamiento automático de los formularios
        e.preventDefault();

        //Datos usuaria
        sessionStorage.setItem("namelog", this.state.values.namelog)
        sessionStorage.setItem("lastname", this.state.values.lastname)
        sessionStorage.setItem("email_log", this.state.values.email_log)
        sessionStorage.setItem("documento", this.state.values.documento)
        sessionStorage.setItem("pass", this.state.values.pass)
        sessionStorage.setItem("passrepeat", this.state.values.passrepeat)


        var namelog, lastname, email_log, documento, pass, passrepeat;
        namelog = document.getElementById("namelog").value;
        lastname = document.getElementById("lastname").value;
        email_log = document.getElementById("email_log").value;
        documento = document.getElementById("documento").value;
        pass = document.getElementById("pass").value;
        passrepeat = document.getElementById("passrepeat").value;

        var valid_email = /\w+@\w+\.[a-z]/;
        var valid_letras = /^[a-zA-Z áéíóúÁÉÍÓÚñÑ\s]*$/;

        if (namelog === "" || lastname === "" || email_log === "" || documento === "" || pass === "" || passrepeat === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (namelog.length < 6 || namelog.length > 40) {
            alert("Por favor ingrese su nombre completo");
            return false;
        }
        else if (!valid_letras.test(namelog)) {
            alert("No se permiten valores numéricos en el nombre");
            return false;
        }
        else if (lastname.length  < 6 || lastname.length > 40) {
            alert("Por favor ingrese sus apellidos completos");
            return false;
        }
        else if (!valid_letras.test(lastname)) {
            alert("No se permiten valores numéricos en los apellidos");
            return false;
        }
        else if (email_log.length > 30) {
            alert("El correo es muy largo");
            return false;
        }
        else if (!valid_email.test(email_log)) {
            alert("El correo no es válido");
            return false;
        }
        else if (documento.length < 7 || documento.length > 10) {
            alert("Escriba un número de identificación válido");
            return false;
        }
        else if (isNaN(documento)) {
            alert("No se permiten caracteres diferentes a números");
            return false;
        }
        else if (pass.length < 8 || pass.length > 16) {
            alert("Sólo se permite una contraseña de mímino 8 caracteres y máximo 16 caracteres");
            return false;
        }
        else if (passrepeat.length < 8 || passrepeat.length > 16) {
            alert("Sólo se permite una contraseña de mímino 8 caracteres y de máximo 16 caracteres");
            return false;
        }
        else if (pass !== passrepeat) {
            alert("Las contraseñas ingresadas deben ser iguales");
            return false;
        }

        //Cuando hacemos click en el botón, con Link navega a la otra vista
        document.querySelector("#registro").click();
    }

    render() {
        //Monitorendo lo que escriba la usuaria
        console.log("Los nombres completos son: ", this.state.values.namelog);
        console.log("Los apellidos completos son: ", this.state.values.lastname);
        console.log("El correo electrónico es: ", this.state.values.email_log);
        console.log("El número de identificación es: ", this.state.values.documento);
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
                <form name="formulario" action="" className="main-form" >
                  <div id="alerta"></div>
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
                                        <label htmlFor="namelog">Nombres Completos<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="namelog" type="text" className="form-control" name="namelog" placeholder="Escriba su nombre" maxLength="40" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="lastname">Apellidos Completos<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="lastname" type="text" className="form-control" name="lastname" placeholder="Escriba sus apellidos" maxLength="40" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                            </section>

                            <section className="row">
                                <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="email_log">Correo electrónico<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="email_log" type="email" className="form-control" name="email_log" placeholder="email@email.com" maxLength="30" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset className="form_group">
                                        <label htmlFor="documento">Número de documento<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="documento" type="tel" className="form-control" name="documento" placeholder="CC" minLength="7" maxLength="10" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                            </section>
                            <section className="row">

                                <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="pass">Contraseña<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="pass" type="password" className="form-control" name="pass" placeholder="Máximo 16 caracteres" maxLength="16" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                <div className="col-md-6">
                                    <fieldset className="form-group">
                                        <label htmlFor="passrepeat">Repita la contraseña<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="passrepeat" type="password" className="form-control" name="passrepeat" placeholder="Máximo 16 caracteres" maxLength="16" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                            </section>
                        </section>
                    </section>
                    <hr />

                    <section className="row">
                        <div className="col-md-12">

                            {/*Validación de datos antes de enviar el formulario*/}

                            {this.state.values.namelog !== ""
                                && this.state.values.lastname !== ""
                                && this.state.values.email_log !== ""
                                && this.state.values.documento !== ""
                                && this.state.values.pass !== ""
                                && this.state.values.passrepeat !== ""
                                ? <button type="submit" onClick={this.handleClick} className="btn btn-success" id="sendRegister" >
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
                        <p>Copyright &copy; 2020 by SICGEM</p>
                    </footer>
                </div>
            </div>
        );
    };
}