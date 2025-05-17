import FormProfileGroup from '../Molecules/FormProfileGroup';
import ProfileImage from "../Atoms/ProfileImage";
import Button from '../Atoms/ButtonTemp';
import "./FormProfile.css"; 
import HeaderImage from "../Atoms/HeaderImagen";


const FormPerfil = () => {
  return (
    <div className="form-side">
      <form>
        <h1>Foto de Perfil</h1>
        <div className="form-group">
          <ProfileImage src="/imagenes/perfil.jpg" alt="Perfil" />
        </div>

        <FormProfileGroup label="Nombre" type="text" id="nombre" name="nombre" placeholder="Tu nombre" readOnly/>
        <FormProfileGroup label="Titulo" type="text" id="titulo" name="titulo" placeholder="titulo"readOnly/>
        <FormProfileGroup label="Fecha de Nacimiento" type="date" id="fechaNacimiento" name="fechaNacimiento"  placeholder="fecha"readOnly/>
        <FormProfileGroup label="Texto" type="text" id="texto" name="texto" placeholder="texto"readOnly/>

         <div>
                  <img className="card-img-bottom" src="/imagenes/perfil.jpg" alt="Card image" />
         </div>

        <FormProfileGroup label="Comentario" type="text" id="comentario" name="comentario" placeholder="comentario"readOnly/>

        <Button type="submit">Comentar</Button>
      </form>
    </div>
  );
};

export default FormPerfil;