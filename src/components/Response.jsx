import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Response extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        cont:
          sessionStorage.getItem("pregunta1") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta1") === "A veces"
              ? 2
              : 1,
        cont2:
          sessionStorage.getItem("pregunta2") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta2") === "A veces"
              ? 2
              : 1,
        cont3:
          sessionStorage.getItem("pregunta3") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta3") === "A veces"
              ? 2
              : 1,
        cont4:
          sessionStorage.getItem("pregunta4") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta4") === "A veces"
              ? 2
              : 1,
        cont5:
          sessionStorage.getItem("pregunta5") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta5") === "A veces"
              ? 2
              : 1,
        cont6:
          sessionStorage.getItem("pregunta6") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta6") === "A veces"
              ? 2
              : 1,
        cont7:
          sessionStorage.getItem("pregunta7") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta7") === "A veces"
              ? 2
              : 1,
        cont8:
          sessionStorage.getItem("pregunta8") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta8") === "A veces"
              ? 2
              : 1,
        cont9:
          sessionStorage.getItem("pregunta9") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta9") === "A veces"
              ? 2
              : 1,
        cont10:
          sessionStorage.getItem("pregunta10") === "SI"
            ? 3
            : sessionStorage.getItem("pregunta10") === "A veces"
              ? 2
              : 1,
        si: 0,
        no: 0,
        a_veces: 0,
      },
    };
  }

  handle() {
    return (
      sessionStorage.getItem("pregunta1") === "A veces"
        ? this.setState({
          ...(this.state.values.a_veces = this.state.values.a_veces + 1),
        })
        : sessionStorage.getItem("pregunta1") === "SI"
          ? this.setState({
            ...(this.state.values.si = this.state.values.si + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta2") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta2") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta3") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta3") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta4") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta4") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta5") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta5") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta6") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta6") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta7") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta7") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta8") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta8") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta9") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta9") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          }),
      sessionStorage.getItem("pregunta10") === "SI"
        ? this.setState({
          ...(this.state.values.si = this.state.values.si + 1),
        })
        : sessionStorage.getItem("pregunta10") === "A veces"
          ? this.setState({
            ...(this.state.values.a_veces = this.state.values.a_veces + 1),
          })
          : this.setState({
            ...(this.state.values.no = this.state.values.no + 1),
          })
    );
  }

  componentDidMount() {
    this.handle();
  }

  render() {
    let total = this.state.values.cont
      + this.state.values.cont2
      + this.state.values.cont3
      + this.state.values.cont4
      + this.state.values.cont5
      + this.state.values.cont6
      + this.state.values.cont7
      + this.state.values.cont8
      + this.state.values.cont9
      + this.state.values.cont10;

    return (
      <div >
        <nav className="navbar-response navbar navbar-expand-lg navbar-dark bg-dark default py-3" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger text-white">Cuenta con nosotras</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item"><a className="nav-link js-scroll-trigger text-white" href="#user-message">Mensaje de la usuaria</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h2 className="text-uppercase text-white font-weight-bold display-4">Resultado de la encuesta</h2>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <div className="row mb-2 ">
                  <div className="col-md-12">
                    <div className="bg-light row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div className="col p-4 d-flex flex-column position-static">
                        <div className="mb-1 text-muted">
                          <p>Fecha de realización: {sessionStorage.getItem("date")}</p>
                        </div>
                        <h4><strong className="d-inline-block mb-2">Hola {sessionStorage.getItem("name")}</strong>
                        </h4>
                        <h4 className="mb-0">Resultado:</h4>
                        <br />
                        <h2 className="font-weight-bold mb-auto">
                          {total > 18
                            ? <span className="text-danger bg-dark">¡Usted se encuentra en peligro!<br /><h5 className="font-weight-bold font-italic">Por favor comuníquese con nosotros a la linea de atención 123</h5></span>
                            : total > 14 ? <span className="text-warning bg-dark">-Su nivel de peligro es medio-<br /><h5 className="text-dark font-weight-bold font-italic">¡Ojo! No es momento de guardar silencio, por favor comuníquese con nosotros a la linea de atención 123</h5></span>
                              : <span className="text-success bg-dark rounded p-2">-Todo parece estar bien-</span>}
                        </h2>
                        <br />
                        <h5 className="font-weight-bold mb-auto text-success">
                          {sessionStorage.getItem("autorizacion") === "SI"
                            ? <span>Nos estaremos comunicando contigo para ayudarte. <br />¡Recuerda que tienes nuestro apoyo!</span>
                            : ""}
                        </h5>
                        <p className="mb-auto">
                          <br />
                          <span>Total de respuestas en <em className="">"Si": </em><strong className="text-danger">{this.state.values.si}</strong></span>
                          <br />
                          <span>Total de respuestas en <em>"No": </em><strong className="text-success">{this.state.values.no}</strong></span>
                          <br />
                          <span> Total de respuestas en <em>"A veces": </em><strong className="text-warning">{this.state.values.a_veces}</strong></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-light p-0 mb-4" >
                  <Link to="/maincards" className="nav-link riesgo riesgo-response m-0" >
                    Ir a las Comunidades
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </header>
        <section className="page-section bg-dark" id="user-message">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Mensaje de la usuaria</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">{sessionStorage.getItem("comment")}</p>
                <button className="btn btn-outline-light p-0 mb-4 btn-xl js-scroll-trigger">
                  <Link
                    to="/" className="nav-link riesgo riesgo-response m-0">
                    Volver a Cuenta con Nosotras
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}