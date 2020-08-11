import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Login } from "../components/Login";


class Register extends Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <div className="row mb-2 ">
                                    <div className="col-md-12">
                                        <div className="bg-light row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                            <div className="col p-4 d-flex flex-column position-static">

                                                <h4><strong className="d-inline-block mt-4">Hola {sessionStorage.getItem("name")}</strong></h4>
                                                <p>_____________________________________________</p>

                                                <h2 >
                                                    <strong className="font-weight-bold font-italic mb-auto text-success mb-4">¡Usted se ha registrado correctamente!</strong>
                                                </h2>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline-light p-0 mb-4" >
                                    <Link to="/" className="nav-link riesgo riesgo-response m-0" >
                                        Volver al inicio
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
};

export default Register;