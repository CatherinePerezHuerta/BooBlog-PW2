import FormProfileGroup from '../Molecules/FormProfileGroup';
import ProfileImage from "../Atoms/ProfileImage";
import Button from '../Atoms/ButtonTemp';
import "./FormProfile.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';
import React, { useState } from 'react';



import HeaderImage from "../Atoms/HeaderImagen";


const FormPerfil = () => {
 
   // Estado para el número de likes y si el usuario ya ha dado like
   const [likes, setLikes] = useState(0); 
   const [liked, setLiked] = useState(false);
 
   const handleLikeClick = () => {
     if (liked) {
       setLikes(likes - 1);
     } else {
       setLikes(likes + 1);
     }
     setLiked(!liked);
   };

  return (
    <div className="form-side">
      <form>
        <div className="post-container">
          {/* Encabezado de la publicación: foto de perfil + info */}
          <div className="post-header">
              <img src="/imagenes/perfil.jpg" alt="Perfil" className="profile-pic" />
                  <div className="post-info">
                       <p className="post-nombre">Leonardo</p>
                       <p className="post-titulo">Ninja estratega</p>
              
                  </div>
           </div>
                {/* Texto */}
              <p className="post-texto">
                Siempre listo para proteger la ciudad con honor.
              </p>

                {/* Imagen de la publicación */}
                <div className="post-image">
                  <img src="/imagenes/perfil.jpg" alt="Post" />
                </div>
             
              <div className='post-footer'>
                 {/* Botón de Like */}
                 <div className={`post-footer ${liked ? 'active' : ''}`} onClick={handleLikeClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '1rem' }}>
                   <FontAwesomeIcon icon={faThumbsUp} size="lg" color={liked ? '#8a2be2' : '#ccc'} />
                   <p>{likes}</p>
                   <p>{liked ? 'Liked' : 'Like'}</p>
                 </div>
                  
              </div>
            
        </div>


        <FormProfileGroup label="Comentario" type="text" id="comentario" name="comentario" placeholder="escribe lo que piensas"readOnly/>

        <Button type="submit">Comentar</Button>
      </form>
    </div>

    
  );
};

export default FormPerfil;
