import React, { Component } from 'react';
import Card from './Card';
import imgone from '../images/rednacional.jpg';
import imgtwo from '../images/vamosmujer.jpg';
import imgthree from '../images/casamujer.jpg';
import imgfour from '../images/victimasyprofesionales.jpg';
import imgfive from '../images/wwb.jpg';
import imgsix from '../images/mujeres.jpg';

class MainCards extends Component {
    render() {
        return (
            <div>
                <div className="design-title">
                    <h2 className="main-title">REDES DE APOYO</h2>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="col-md-4"><Card imgsrc={imgone} title="Red Nacional de Mujeres" enlace="https://www.rednacionaldemujeres.org/" text="Su trabajo se ha centrado en tres ejes específicos: participación política y construcción de ciudadanía de las mujeres, eliminación de las diferentes violencias ejercidas contra las mujeres, y participación de las mujeres en procesos y construcción de paz." /></div>
                    <div className="col-md-4"><Card imgsrc={imgtwo} title="Vamos Mujer" enlace="http://vamosmujer.org.co/sitio/" text=" Promueve en mujeres y hombres el reconocimiento y la incorporación de los Derechos Humanos y que el respeto, la solidaridad, la equidad, la igualdad y la justicia sean fundamento de las relaciones entre las y los sujetos, y de ellos y ellas con la naturaleza." /></div>
                    <div className="col-md-4"><Card imgsrc={imgthree} title="Casa de la Mujer" enlace="https://www.casmujer.com/" text="Es una organización que impulsa procesos de acción – reflexión y transformación con las mujeres; la recuperación de la memoria histórica; el diálogo como mecanismo político y ético para la tramitación de los conflictos públicos y privados." /></div>
                </div>
                <br />
                <div className="container-fluid d-flex justify-content-center">
                    <div className="col-md-4"><Card imgsrc={imgfour} title="Red de Mujeres Víctimas y Profesionales" enlace="https://www.redmujeresvisiblemente.org/" text="Es una organización de mujeres víctimas de violencia sexual, defensora de los Derechos Humanos, que promueve el empoderamiento de las víctimas de este delito en el marco del conflicto armado y fuera de él." /></div>
                    <div className="col-md-4"><Card imgsrc={imgfive} title="Fundación wwb Colombia" enlace="https://www.fundacionwwbcolombia.org/" text="Impulsan procesos de empoderamiento de emprendedoras de escasos recursos en Colombia, para contribuir a su transformación en mujeres autónomas y capaces de tomar decisiones adecuadas para construir un proyecto de vida digno y mejorar su nivel socioeconómico." /></div>
                    <div className="col-md-4"><Card imgsrc={imgsix} title="Mujeres Que Crean" enlace="http://www.mujeresquecrean.org/" text="Trabajan para que las mujeres ganemos autoreconocimiento, valoración, empoderamiento y posicionamiento como sujetos individuales, sociales, culturales y políticos. Rechazamos toda manifestación que coarte la vida digna y libre de las mujeres." /></div>
                </div><br />
            </div>
        );
    }
}
export default MainCards;