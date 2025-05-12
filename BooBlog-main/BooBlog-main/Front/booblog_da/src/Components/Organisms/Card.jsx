
import React from 'react';
import "./Card.css"; 
import { Link } from 'react-router-dom';
import HeaderImage from "../Atoms/HeaderImagen";

const Card = ({ title, text, imgSrc, date }) => {
  return (
    <div className="card">
      <div className="card-body">
      <Link to="/profile">
      <HeaderImage src="/imagenes/perfil.jpg" alt="Perfil" />
      </Link>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">
          <small className="text-muted">Last updated {date}</small>
        </p>
      </div>
      <img className="card-img-bottom" src={imgSrc} alt="Card image" />
    </div>
  );
};

export default Card;
