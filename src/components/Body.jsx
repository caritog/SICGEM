import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTruck, faGavel, faFemale} from '@fortawesome/free-solid-svg-icons';


class Body extends Component {
    render() {
        return (
            <div>

                <div className="contenedor">
                    <img src={require('../images/composing-2391033_1920.jpg')} className="img-fluid imagen-morada" alt="Mujer de fondo" />
                    <div className="texto-img">
                        <h2>¡NO ESTÁS SOLA!</h2>
                        <p className="lead font-weight-bold">Aquí encontrarás una luz de apoyo frente a lo que estás viviendo. ¡Juntas lo lograremos!.</p>
                        <h2>¡NO GUARDES SILENCIO, ATRÉVETE A DENUNCIAR!</h2>
                        <p className="lead font-weight-bold">Recuerda que si eres testigo de agresión contra una mujer y no denuncias, te conviertes en
                        cómplice.
                        </p>
                        <h2>TU LUCHA ES NUESTRA LUCHA</h2>
                        <p className="lead font-weight-bold">Constantemente se presentan casos de violencia de género, recuerda que tus derechos deben ser
                    respetados.</p>
                    </div>
                </div>


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
                            <span className="text-muted">A MUJERES EN RIESGO Y VÍCTIMAS DE VIOLENCIAS.</span>
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
                                <img src={require('../images/hand2.jpg')} alt="¡No más maltrato!"
                                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto mt-5 pt-4" width="500"
                                    height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                                    aria-label="Placeholder: 500x500" />
                                <title>Placeholder</title>
                                 {/* <rect width="100%" height="100%" fill="#eee" /> */}
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
                                <div className="card-body">
                                    <h5 className="card-title">PROPÓSITO</h5>
                                    <p className="card-text">Fortalecer los nexos comunicativos con las ciudadanas y los ciudadanos de Medellín en
                                    perspectiva de género, buscando la eliminación de toda forma de violencia y discriminación contra las
                                mujeres y promoviendo su respeto y reconocimiento en todos los ámbitos de la vida ciudadana.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">3,642</h5>
                                    <br />
                                    <p className="card-text">PERSONAS QUE SE ANIMARON A DENUNCIAR.</p>
                                </div>
                                <img src={require('../images/call.jpg')} className="card-img-top" alt="Llamando a denunciar" />
                            </div>
                        </div>
                        <div className="col mb-4 ">
                            <div className="card h-100">
                                <img src={require('../images/reunion.jpg')} className="card-img-top" alt="Reunión de mujeres" />
                                <div className="card-body">
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
                                        <FontAwesomeIcon icon={faPhone}/>
                                    <title>Placeholder</title>
                                    {/* <rect width="100%" height="100%" fill="#777" /> */}
                                    {/* <text x="50%" y="50%" fill="#777" dy=".3em"></text> */}
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
                                    <FontAwesomeIcon icon={faTruck}/>
                                    <title>Placeholder</title>
                                    {/* <rect width="100%" height="100%" fill="#777" /> */}
                                    {/* <text x="50%" y="50%" fill="#777" dy=".3em"></text> */}
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
                                        <FontAwesomeIcon icon={faGavel}/>
                                    <title>Placeholder</title>
                                    {/* <rect width="100%" height="100%" fill="#777" /> */}
                                    {/* <text x="50%" y="50%" fill="#777" dy=".3em"></text> */}
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
                                         <FontAwesomeIcon icon={faFemale}/>
                                    <title>Placeholder</title>
                                    {/* <rect width="100%" height="100%" fill="#777" /> */}
                                    {/* <text x="50%" y="50%" fill="#777" dy=".3em"></text> */}
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