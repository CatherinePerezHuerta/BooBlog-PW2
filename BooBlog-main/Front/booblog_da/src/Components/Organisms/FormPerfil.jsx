
import FormProfileGroup from '../Molecules/FormProfileGroup';
import ProfileImage from "../Atoms/ProfileImage";
import Button from '../Atoms/ButtonTemp';
import "./FormProfile.css"; 


const FormPerfil = () => {
  return (
    <div className="form-side">
      <form>
        <h1>Foto de Perfil</h1>
        <div className="form-group">
          <ProfileImage src="/imagenes/perfil.jpg" alt="Perfil" />
        </div>

        <FormProfileGroup label="Nombre" type="text" id="nombre" name="nombre" placeholder="Tu nombre"/>
        <FormProfileGroup label="Apellidos" type="text" id="apellidos" name="apellidos"  placeholder="Tus Apellidos"/>
        <FormProfileGroup label="Correo" type="text" id="correo" name="correo" placeholder="Tu Correo"/>
        <FormProfileGroup label="Fecha de Nacimiento" type="date" id="fechaNacimiento" name="fechaNacimiento"  placeholder="fecha"/>

        <Button type="submit">Editar</Button>
      </form>
    </div>
  );
};

export default FormPerfil;

