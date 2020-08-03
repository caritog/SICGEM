import React, { Component } from "react";
import { Link } from "react-router-dom";
//rafce abreviación

class Navbar extends Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                    <div className="container">
                        <a className="navbar-brand" rel="noopener noreferrer" href="#"></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07"
                            aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample07">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.medellin.gov.co/sicgem/" >INICIO <span
                                        className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.medellin.gov.co/sicgem/?page_id=744">EQUIDAD DE GÉNERO <span
                                        className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.medellin.gov.co/sicgem/?page_id=1086">MEMORIAS <span
                                        className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.medellin.gov.co/sicgem/?page_id=1088">ADMINISTRATIVO <span
                                        className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">CUENTA CON NOSOTRAS <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">REGÍSTRATE</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdown07">
                                        <a className="dropdown-item" href="#">INSTITUCIÓN ALIADA</a>
                                        <a className="dropdown-item" href="#">OPORTUNIDADES MUJER</a>
                                    </div>
                                </li>
                                <li className="nav-item m3">
                                    <Link
                                        to="/form" className="d-none" id="encuesta">
                                    </Link>
                                    <a className="nav-link riesgo"
                                        href="https://www.medellin.gov.co/sicgem_war/app/#/feminicide-survey?clean">¿ESTOY EN RIESGO?</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-md-0">
                                <input className="form-control" type="search" style={{ width: '6rem' }} placeholder="Buscar..." aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navbar;