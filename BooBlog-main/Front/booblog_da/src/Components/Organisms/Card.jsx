
import React from 'react';
import "./Card.css"; 
import { Link } from 'react-router-dom';
import HeaderImage from "../Atoms/HeaderImagen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

const Card = ({ title, text, imgSrc, date }) => {
  $( document ).ready(function() {
    $(".icon").unbind().on("click",function(){
        console.log ("hola")
        if($(this).hasClass("active")){
          $(this).removeClass("active")
        }
        else{
          $(this).addClass("active")
        }
      
     })
  });
 
  return (
    <div className="card">

      <div className="card-body">
      <Link to="/profile">
      <HeaderImage src="/imagenes/perfil.jpg" alt="Perfil" />
      </Link>
      <Link to="/publicacion">
        <h5 className="card-title">{title}</h5>
        </Link>
        <p className="card-text">{text}</p>
        <p className="card-text">
          <small className="text-muted">Last updated {date}</small>
        </p>
      </div>

      <div className='imageContainter'><img className="card-img-bottom" src={imgSrc} alt="Card image" /></div>
        <div className='card-footer'>
            <div className='content' >
                <div className='icon'>
                  <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                  <p>Like</p>
                </div>
            </div>
        </div>  
      </div>
  );
};

export default Card;
