import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTruck, faGavel, faFemale } from '@fortawesome/free-solid-svg-icons';

class Body extends Component {
    render() {
        return (
            <div>
                {/*  BODY BANNER */}
                <section className="masthead-body masthead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <p className="mb-5 ">Aquí encontrarás una luz de apoyo frente a lo que estás viviendo. <br /> ¡Juntas lo lograremos!</p>
                            </div>
                            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            </div>
                        </div>
                    </div>
                </section>

                {/*  BODY PARTE 1 */}

                <section className="body1">
                    <br />
                    <div className="container marketing">
                        <article className="title_container text-center">
                            <h1 className="title">CUENTA CON NOSOTRAS</h1>
                        </article>
                        <hr className="featurette-divider" />
                        <br />
                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">ATENCIÓN DE EMERGENCIA
                                    <span className="text-muted"> A MUJERES EN RIESGO Y VÍCTIMAS DE VIOLENCIAS.</span>
                                </h2>
                                <p className="lead">Se realiza a través de la Línea 123, solicitando a la operadora comunicación con la Línea
                                Mujer
                                de la Alcaldía de Medellín, la cual ofrece información, orientación psicológica, intervención en crisis,
                                asesoría jurídica, acompañamiento jurídico telefónico y acompañamiento psicológico y social a mujeres
                                mayores
                                de 18 años y adolescentes en riesgo o víctimas de violencia por parte de su pareja o ex pareja y a personas
                                que alertan dichas situaciones. La atención permite el acceso inmediato a los servicios de salud, protección
                                y
                                justicia.
                                </p>
                                <p className="lead">La atención se presta día y noche (24 horas) durante los 7 días de la semana.</p>
                            </div>
                            <div className="col-md-5">
                                <img src={require('../images/hand.jpg')} alt="¡No más maltrato!"
                                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-5 pt-4" width="500"
                                    height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                                    aria-label="Placeholder: 500x500" />
                                <title>Placeholder</title>
                            </div>
                        </div>
                        <hr className="featurette-divider" />
                    </div>
                </section>

                {/*  BODY PARTE 2 */}

                <section className="body2 container">
                    <br />
                    <div className="row row-cols-1 row-cols-md-3 text-center">
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src={require('../images/secretaria.jpg')} className="card-img-top" alt="Reunión con la Secretaría de la Mujer" />
                                <div className="card-body bg-light">
                                    <h5 className="card-title">PROPÓSITO</h5>
                                    <p className="card-text">Fortalecer los nexos comunicativos con las ciudadanas y los ciudadanos de Medellín en
                                    perspectiva de género, buscando la eliminación de toda forma de violencia y discriminación contra las
                                mujeres y promoviendo su respeto y reconocimiento en todos los ámbitos de la vida ciudadana.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <div className="card-body bg-light">
                                    <h5 className="card-title">3,642</h5>
                                    <br />
                                    <p className="card-text">PERSONAS QUE SE ANIMARON A DENUNCIAR.</p>
                                    <button className="btn btn-info btn-body" href="https://www.medellin.gov.co/sicgem/?page_id=866">Ver más</button>
                                </div>
                                <img src={require('../images/call.jpg')} className="card-img-top" alt="Llamando a denunciar" />
                            </div>
                        </div>
                        <div className="col mb-4 ">
                            <div className="card h-100">
                                <img src={require('../images/reunion.jpg')} className="card-img-top" alt="Reunión de mujeres" />
                                <div className="card-body bg-light">
                                    <h5 className="card-title">OBJETIVO</h5>
                                    <p className="card-text">Las mujeres de Medellín, ejerciendo sus derechos en la vida social, económica,
                                académica, cultural y política de la ciudad con igualdad de oportunidades.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  BODY PARTE 3 */}

                <section className="body3">
                    <div className="container text-center mt-4">
                        <hr className="featurette-divider" />
                        <article className="title_container text-center pt-4 pb-4">
                            <h2 className="title">OBJETIVOS DE PROGRAMA</h2>
                        </article>
                        <div className="row">
                            <div className="col-lg-3">
                                <i className="bd-placeholder-img rounded-circle fas fa-phone" width="140" height="140"
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                    aria-label="Placeholder: 140x140">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <title>Placeholder</title>
                                </i>
                                <h3>Atención de la línea 123</h3>
                                <br />
                                <p>Sabías que el año 2017, 3.642 mujeres en alto riesgo y víctimas de violencias basadas en género, accedieron
                                al sistema de atención y prevención de violencias, a través de la Línea 123 mujer, Hogares de Acogida y el
                                    Acompañamiento psico-jurídico en el territorio.</p>
                                <br />
                                <br />
                                <br />

                            </div>
                            <div className="col-lg-3">
                                <i className="bd-placeholder-img rounded-circle fas fa-truck" width="140" height="140"
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                    aria-label="Placeholder: 140x140">
                                    <FontAwesomeIcon icon={faTruck} />
                                    <title>Placeholder</title>
                                </i>
                                <h3>Centro móvil de Equidad de Género</h3>
                                <br />
                                <p>La Secretaría de las Mujeres cuenta con un Centro Móvil de Equidad de Género, para la prevención y atención
                                de la violencia basada en el género, que llega a todos los barrios y veredas del Municipio de Medellín,
                                    inclusive a los más apartados.</p>
                                <br />
                                <br />
                                <br />

                            </div>
                            <div className="col-lg-3">
                                <i className="bd-placeholder-img rounded-circle fas fa-gavel" width="140" height="140"
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                    aria-label="Placeholder: 140x140">
                                    <FontAwesomeIcon icon={faGavel} />
                                    <title>Placeholder</title>
                                </i>
                                <h3>La ley 1257 de 2008<span className="invisible">...</span></h3>
                                <br />
                                <p>La ley 1257 de 2008, garantiza para todas las mujeres una vida libre de violencia, el ejercicio de los
                                derechos reconocidos en el ordenamiento jurídico, el acceso a los procedimientos administrativos y
                                judiciales
                                    para su protección y atención, y la adopción de las políticas públicas necesarias para su realización</p>
                                <br />
                            </div>

                            <div className="col-lg-3">
                                <i className="bd-placeholder-img rounded-circle fas fa-female" width="140" height="140"
                                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                                    aria-label="Placeholder: 140x140">
                                    <FontAwesomeIcon icon={faFemale} />
                                    <title>Placeholder</title>
                                </i>
                                <h3>Violencia contra las mujeres</h3>
                                <br />
                                <p>“Cualquier acción u omisión, que le cause muerte, daño o sufrimiento físico, sexual, psicológico, económico
                                o patrimonial por su condición de mujer, así como las amenazas de tales actos, la coacción o la privación
                                arbitraria de la libertad, bien sea que se presente en el ámbito público o en el privado”. Ley 1257 del 4 de
                                diciembre de 2008. Artículo 2°
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
};

export default Body;