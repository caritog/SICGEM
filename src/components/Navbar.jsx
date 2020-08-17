import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
                    <div className="container">
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
                                    <a className="nav-link" href="/"><span className="sr-only">(current)</span>CUENTA CON NOSOTRAS </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="dropdown07" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">REGÍSTRATE</a>
                                    <div className="dropdown-menu p-0" aria-labelledby="dropdown07">
                                        <div className="dropdown-item " >
                                            <Link to="/login" className="nav-link text-white m-0" id="cuentaconnosotras">
                                                INSTITUCIÓN ALIADA
                                            </Link>
                                        </div>
                                        <div className="dropdown-item" >
                                            <Link to="/maincards" className="nav-link text-white m-0" id="cuentaconnosotras">
                                                OPORTUNIDADES MUJER
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                <div className="dropdown-divider"></div>
                                <li className="nav-item">
                                    <button className="btn btn-outline-light button-riesgo p-0" >
                                        <Link to="/form" className="nav-link riesgo m-0" id="cuentaconnosotras">
                                            ¿ESTOY EN RIESGO?
                                        </Link>
                                    </button>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-md-0">
                                <div className="input-group">
                                    <input className="form-control buscar" type="search" style={{ width: '6rem' }} placeholder="Buscar" aria-label="Search" />
                                    <div className="input-group-append">
                                        <span className=" input-group-btn " >
                                            <button className="btn btn-secondary buscar" id="inputGroup-sizing-default" type="submit" >
                                                <i><FontAwesomeIcon icon={faSearch} /></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navbar;

