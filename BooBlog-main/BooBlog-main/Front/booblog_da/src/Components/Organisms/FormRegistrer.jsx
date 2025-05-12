import FormGroup from '../Molecules/FormGrup';
//import "./FormRegistrer.css"; 
import Button from '../Atoms/ButtonTemp';
import { Link } from 'react-router-dom';

const FormRegistrer = () => {
  return (
    <div className="form-side">
      <h2>Regístrate</h2>
      <form>
        <FormGroup label="Nombre" type="text" id="nombre" name="nombre" />
        <FormGroup label="Apellidos" type="text" id="apellidos" name="apellidos" />
        <FormGroup label="Correo" type="email" id="correo" name="correo" />
        <FormGroup label="Contraseña" type="password" id="contrasena" name="contrasena" />
        <FormGroup label="Foto de perfil" type="file" accept="image/*" id="fotoPerfil" name="fotoPerfil"/>
        <Link to="/">
        <Button type="submit">Registrarse</Button>
        </Link>

        <div className="login-link">
          <Link to="/login">¿Ya tienes cuenta? Bienvenido</Link>
        </div>
      </form>
    </div>
  );
};

export default FormRegistrer;

