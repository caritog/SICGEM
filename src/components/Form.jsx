import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                name: "",
                age: "",
                email: "",
                number: "",
                date: "",
                pregunta1: "",
                pregunta2: "",
                pregunta3: "",
                pregunta4: "",
                pregunta5: "",
                pregunta6: "",
                pregunta7: "",
                pregunta8: "",
                pregunta9: "",
                pregunta10: "",
                comment: "",
                autorizacion: "",
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
        sessionStorage.setItem("name", this.state.values.name)
        sessionStorage.setItem("age", this.state.values.age)
        sessionStorage.setItem("email", this.state.values.email)
        sessionStorage.setItem("number", this.state.values.number)
        sessionStorage.setItem("date", this.state.values.date)

        var name, age, email, number;
        name = document.getElementById("name").value;
        age = document.getElementById("age").value;
        email = document.getElementById("email").value;
        number = document.getElementById("number").value;
        var expresion = /\w+@\w+\.[a-z]/;
        var letras = /^[a-zA-Z áéíóúÁÉÍÓÚñÑ\s]*$/;

        if (name === "" || age === "" || email === "" || number === "") {
            alert("Todos los campos son obligatorios");
            return false;
        }
        else if (name.length < 6 || name.length > 40) {
            alert("Por favor ingrese su nombre completo");
            return false;
        } 
        else if (!letras.test(name)) {
            alert("No se permiten valores numéricos en el nombre");
            return false;
        }
        else if (age.length > 2) {
            alert("La edad es muy larga");
            return false;
        }
        else if (isNaN(age)) {
            alert("Debe igresar su edad en números");
            return false;
        }
        else if (email.length > 30) {
            alert("El correo es muy largo");
            return false;
        }
        else if (!expresion.test(email)) {
            alert("El correo no es válido");
            return false;
        }
        else if (number.length < 7 || number.length > 10) {
            alert("Ingrese un número de teléfono válido");
            return false;
        }
        else if (isNaN(number)) {
            alert("El teléfono ingresado no es válido");
            return false;
        }

        
        //Preguntas radio buttons
        sessionStorage.setItem("pregunta1", this.state.values.pregunta1)
        sessionStorage.setItem("pregunta2", this.state.values.pregunta2)
        sessionStorage.setItem("pregunta3", this.state.values.pregunta3)
        sessionStorage.setItem("pregunta4", this.state.values.pregunta4)
        sessionStorage.setItem("pregunta5", this.state.values.pregunta5)
        sessionStorage.setItem("pregunta6", this.state.values.pregunta6)
        sessionStorage.setItem("pregunta7", this.state.values.pregunta7)
        sessionStorage.setItem("pregunta8", this.state.values.pregunta8)
        sessionStorage.setItem("pregunta9", this.state.values.pregunta9)
        sessionStorage.setItem("pregunta10", this.state.values.pregunta10)
        sessionStorage.setItem("comment", this.state.values.comment)

        //Autorización de datos
        sessionStorage.setItem("autorizacion", this.state.values.autorizacion)

        //Cuando hacemos click en el botón, con Link navega a la otra vista
        document.querySelector("#resultado").click();
    }

    render() {
        //Monitorendo lo que escriba la usuaria
        console.log("El nombre completo es: ", this.state.values.name);
        console.log("La edad es: ", this.state.values.age);
        console.log("El correo electrónico es: ", this.state.values.email);
        console.log("El teléfono es: ", this.state.values.number);
        console.log("La fecha de realización de la encuesta es: ", this.state.values.date);
        console.log("La pregunta 1 es: ", this.state.values.pregunta1);
        console.log("La pregunta 2 es: ", this.state.values.pregunta2);
        console.log("La pregunta 3 es: ", this.state.values.pregunta3);
        console.log("La pregunta 4 es: ", this.state.values.pregunta4);
        console.log("La pregunta 5 es: ", this.state.values.pregunta5);
        console.log("La pregunta 6 es: ", this.state.values.pregunta6);
        console.log("La pregunta 7 es: ", this.state.values.pregunta7);
        console.log("La pregunta 8 es: ", this.state.values.pregunta8);
        console.log("La pregunta 9 es: ", this.state.values.pregunta9);
        console.log("La pregunta 10 es: ", this.state.values.pregunta10);
        console.log("El mensaje de la usuaria es: ", this.state.values.comment);
        console.log("¿Autorizó a mensajes o llamadas?: ", this.state.values.autorizacion);

        return (
            <div className="container">
                <br />
                <section className="row">
                    <div className="col-md-12 cabecera">
                        <h1 className="text-center">Encuesta <br /> ¿Has sentido que han vulnerado tus derechos o te han violentado?</h1>
                        <p className="text-center">Queremos ayudarte y estamos del otro lado de la pantalla para hacerlo.
                            Por favor responde las siguientes preguntas.</p>
                        <p className="text-center" style={{ marginbottom: '60px' }} ><small className="font-italic text-secondary">Todos los campos marcados con <span className="font-weight-bold text-danger">*</span> son obligatorios.</small></p>
                    </div>
                </section>
                <form action="" className="main-form"  >
                    <section className="row">
                        <fieldset className="col-md-12">
                            <h3>Datos básicos:</h3>
                        </fieldset>
                    </section>
                    <section className="row">
                        <section className="col-md-12">
                            <section className="row">
                                <div className="col-md-8">
                                    <fieldset className="form-group">
                                        <label htmlFor="name">Nombre Completo<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="name" type="text" className="form-control" name="name" placeholder="Escriba su nombre completo" maxLength="40" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                <div className="col-md-4">
                                    <fieldset className="form_group">
                                        <label htmlFor="age">Edad<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="age" type="tel" className="form-control" name="age" placeholder="0" maxLength="2" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                            </section>
                            <section className="row">
                                <div className="col-md-4">
                                    <fieldset className="form-group">
                                        <label htmlFor="email">Correo electrónico<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="email" type="email" className="form-control" name="email" placeholder="email@email.com"
                                            pattern="^[a-zA-Z0-9.!#$%’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" maxLength="30" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                <div className="col-md-4">
                                    <fieldset className="form-group">
                                        <label htmlFor="number">Número de contacto<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="number" type="tel" className="form-control" name="number" placeholder="Teléfono o celular" maxLength="10" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                                <div className="col-md-4">
                                    <fieldset className="form-group">
                                        <label htmlFor="date">Fecha Actual<span className="font-weight-bold text-danger">*</span></label>
                                        <input id="date" type="date" className="form-control" name="date" required onChange={this.handleChange} />
                                    </fieldset>
                                </div>
                            </section>
                        </section>
                    </section>
                    <hr />

                    {/* Cuestionario */}

                    <section className="row">
                        <div className="col-md-12">
                            <h3>Cuestionario:</h3>
                            <p></p>
                        </div>
                    </section>

                    {/* PREGUNTA 1 */}

                    <section className="row">
                        <fieldset className=" preg1 col-md-6">
                            <p><span className="font-weight-bold">1-</span> ¿Tu pareja te empuja o te jalonea?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta1" id="pregunta1a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta1" id="pregunta1b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta1" id="pregunta1c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 2 */}

                    <section className="row">
                        <fieldset className=" preg2 col-md-6">
                            <p><span className="font-weight-bold">2-</span> ¿Tu pareja te encierra o te aísla de tus seres queridos?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta2" id="pregunta2a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta2" id="pregunta2b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta2" id="pregunta2c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 3 */}

                    <section className="row">
                        <fieldset className=" preg3 col-md-6">
                            <p><span className="font-weight-bold">3-</span> ¿Tu pareja te amenaza de muerte?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta3" id="pregunta3a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta3" id="pregunta3b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta3" id="pregunta3c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 4 */}

                    <section className="row">
                        <fieldset className=" preg4 col-md-6">
                            <p><span className="font-weight-bold">4-</span> ¿Tu pareja te obliga a tener relaciones sexuales, o te ha violado?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta4" id="pregunta4a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta4" id="pregunta4b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta4" id="pregunta4c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 5 */}

                    <section className="row">
                        <fieldset className=" preg5 col-md-6">
                            <p><span className="font-weight-bold">5-</span> ¿Tu pareja te golpea o agrede físicamente?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta5" id="pregunta5a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta5" id="pregunta5b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta5" id="pregunta5c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 6 */}

                    <section className="row">
                        <fieldset className=" preg6 col-md-6">
                            <p><span className="font-weight-bold">6-</span> ¿Tu pareja te humilla y te critica en público o en privado?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta6" id="pregunta6a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta6" id="pregunta6b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta6" id="pregunta6c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 7 */}

                    <section className="row">
                        <fieldset className=" preg7 col-md-6">
                            <p><span className="font-weight-bold">7-</span> ¿A tu pareja le molesta que tengas contacto con familiares y amigos?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta7" id="pregunta7a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta7" id="pregunta7b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta7" id="pregunta7c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 8 */}

                    <section className="row">
                        <fieldset className=" preg8 col-md-6">
                            <p><span className="font-weight-bold">8-</span> ¿Tu pareja te insulta o te pone apodos despectivos?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta8" id="pregunta8a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta8" id="pregunta8b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta8" id="pregunta8c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 9 */}

                    <section className="row">
                        <fieldset className=" preg9 col-md-6">
                            <p><span className="font-weight-bold">9-</span> ¿Te sientes segura en tu casa?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta9" id="pregunta9a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta9" id="pregunta9b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta9" id="pregunta9c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    {/* PREGUNTA 10*/}

                    <section className="row">
                        <fieldset className=" preg10 col-md-6">
                            <p><span className="font-weight-bold">10-</span> ¿Consideras que la violencia y el maltrato se dan sólo cuando hay golpes?<span className="font-weight-bold text-danger">*</span></p>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta10" id="pregunta10a" value="SI" required onChange={this.handleChange} /> Si
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta10" id="pregunta10b" value="NO" required onChange={this.handleChange} /> No
                            </label>
                        </fieldset>
                        <fieldset className="col-md-2">
                            <label className="radio">
                                <input type="radio" name="pregunta10" id="pregunta10c" value="A veces" required onChange={this.handleChange} /> A veces
                            </label>
                        </fieldset>
                    </section>

                    <br />
                    <hr />

                    {/*Mensaje */}

                    <section className="row">
                        <div className="col-md-12">
                            <h3>Mensaje:</h3>
                            <p></p>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="comment">Coméntanos tu situación al respecto <span className="font-italic text-secondary">Opcional.</span> </label>
                                <textarea className="form-control" name="comment" rows="6" id="comentarios" onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                    </section>

                    <br />
                    <hr />

                    {/*Autorización de datos */}

                    <section className="row">
                        <div className="col-md-12">
                            <h3>Autorización de datos</h3>
                            <p></p>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <p className="font-weight-bolder">
                                    ¿Autoriza a recibir mensajes o llamadas de nuestras asesoras de parte de
                                    <span className="font-weight-bold text-info"> La Secretaría de las Mujeres </span>para ayudarle en su caso?
                                    <span className="font-weight-bolder text-danger">*</span>
                                </p>
                                <fieldset className="col-md-2">
                                    <label className="radio">
                                        <input type="radio" name="autorizacion" id="autorizacion1" value="SI" required onChange={this.handleChange} /> Si
                                    </label>
                                </fieldset>
                                <fieldset className="col-md-2">
                                    <label className="radio">
                                        <input type="radio" name="autorizacion" id="autorizacion2" value="NO" required onChange={this.handleChange} /> No
                                    </label>
                                </fieldset>
                            </div>
                        </div>
                    </section>
                    <section className="row">
                        <div className="col-md-12">

                            {/*Validación de campos llenos antes de enviar el formulario*/}

                            {this.state.values.name !== ""
                                && this.state.values.age !== ""
                                && this.state.values.email !== ""
                                && this.state.values.number !== ""
                                && this.state.values.date !== ""
                                && this.state.values.pregunta1 !== ""
                                && this.state.values.pregunta2 !== ""
                                && this.state.values.pregunta3 !== ""
                                && this.state.values.pregunta4 !== ""
                                && this.state.values.pregunta5 !== ""
                                && this.state.values.pregunta6 !== ""
                                && this.state.values.pregunta7 !== ""
                                && this.state.values.pregunta8 !== ""
                                && this.state.values.pregunta9 !== ""
                                && this.state.values.pregunta10 !== ""
                                && this.state.values.autorizacion !== ""
                                ? <button type="submit" onClick={this.handleClick} className="btn btn-success" id="sendForm">
                                    Enviar Encuesta
                                    </button>
                                : <button type="submit" onClick={this.handleClick} className="btn btn-success" id="sendForm" disabled>
                                    Enviar Encuesta
                                    </button>
                            }
                            <Link
                                to="/response" className="d-none" id="resultado">
                            </Link>
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
