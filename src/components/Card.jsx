import React from "react";

const Card = props => {
    return (
        <div className="card card-community text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="logo red nacional de mujeres" className="card-img-top-community" />
            </div>
            <div className="card-body-community text-dark">
            <h2 className="card-title-community"> {props.title} </h2>
                <p className="card-text-community text-secondary"> {props.text} </p>
                <a href={props.enlace} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info card-btn">Saber Más</a>
            </div>
        </div>
        
    );
}
export default Card;