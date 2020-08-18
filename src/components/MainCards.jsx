import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainCards extends Component {
    render() {
        return (
            <div className="container">
                <div className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 text-center">
                            <h3 className="blog-header-logo  card-header-title" >COMUNIDADES Y REDES DE APOYO</h3>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <button className="btn btn-outline-light p-0 mb-4" >
                                <Link to="/" className="nav-link riesgo riesgo-response m-0" >
                                    Volver a Cuenta con Nosotras
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <section className="cards-community container">
                    <br />
                    <div className="row row-cols-1 row-cols-md-3 text-center">
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src={require('../images/rednacional.jpg')} className="card-img-top card-img-top-community" alt="Reunión con la Secretaría de la Mujer" />
                                <div className="card-body bg-light">
                                    <h5 className="card-title-community">Red Nacional de Mujeres</h5>
                                    <p className="card-text">Su trabajo se ha centrado en tres ejes específicos: participación política y construcción de ciudadanía de las mujeres, eliminación de las diferentes violencias ejercidas contra las mujeres, y participación de las mujeres en procesos y construcción de paz.</p>
                                    <a href="https://www.rednacionaldemujeres.org/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info card-btn">Saber Más</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4 ">
                            <div className="card h-100">
                                <img src={require('../images/vamosmujer.jpg')} className="card-img-top card-img-top-community" alt="Reunión de mujeres" />
                                <div className="card-body bg-light">
                                    <h5 className="card-title-community">Vamos Mujer</h5>
                                    <p className="card-text">Promueve en mujeres y hombres el reconocimiento y la incorporación de los Derechos Humanos y que el respeto, la solidaridad, la equidad, la igualdad y la justicia sean fundamento de las relaciones entre las y los sujetos, y de ellos y ellas con la naturaleza.</p>
                                    <a href="http://vamosmujer.org.co/sitio/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info card-btn">Saber Más</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4 ">
                            <div className="card h-100">
                                <img src={require('../images/casamujer.jpg')} className="card-img-top card-img-top-community" alt="Reunión de mujeres" />
                                <div className="card-body bg-light">
                                    <h5 className="card-title-community">Casa de la Mujer</h5>
                                    <p className="card-text">Es una organización que impulsa procesos de acción – reflexión y transformación con las mujeres; la recuperación de la memoria histórica; el diálogo como mecanismo político y ético para la tramitación de los conflictos públicos y privados.</p>
                                    <a href="https://www.casmujer.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info card-btn">Saber Más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cards-community container mt-3 mb-4">
                    <br />
                    <div className="row row-cols-1 row-cols-md-3 text-center">
                        <div className="col mb-4 ">
                            <div className="card h-100">
                                <img src={require('../images/victimasyprofesionales.jpg')} className="card-img-top card-img-top-community" alt="Reunión de mujeres" />
                                <div className="card-body bg-light">
                                    <h5 className="card-title-community">Red de Mujeres Víctimas y Profesionales</h5>
                                    <p className="card-text">Es una organización de mujeres víctimas de violencia sexual, defensora de los Derechos Humanos, que promueve el empoderamiento de las víctimas de este delito en el marco del conflicto armado y fuera de él.</p>
                                    <a href="https://www.redmujeresvisiblemente.org/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info card-btn">Saber Más</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4 ">
                            <div className="card h-100">
                                <img src={require('../images/wwb.jpg')} className="card-img-top card-img-top-community" alt="Reunión de mujeres" />
                                <div className="card-body bg-light">
                                    <h5 className="card-title-community">Fundación wwb Colombia</h5>
                                    <p className="card-text">Impulsan procesos de empoderamiento de emprendedoras de escasos recursos en Colombia, para contribuir a su transformación en mujeres autónomas y capaces de tomar decisiones adecuadas para construir un proyecto de vida digno y mejorar su nivel socioeconómico.</p>
                                    <a href="https://www.fundacionwwbcolombia.org/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info card-btn">Saber Más</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4 ">
                            <div className="card h-100">
                                <img src={require('../images/mujeres.jpg')} className="card-img-top card-img-top-community" alt="Reunión de mujeres" />
                                <div className="card-body bg-light">
                                    <h5 className="card-title-community">Mujeres Que Crean</h5>
                                    <p className="card-text">Trabajan para que las mujeres ganemos autoreconocimiento, valoración, empoderamiento y posicionamiento como sujetos individuales, sociales, culturales y políticos. Rechazamos toda manifestación que coarte la vida digna y libre de las mujeres.</p>
                                    <a href="http://www.mujeresquecrean.org/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info card-btn">Saber Más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default MainCards;