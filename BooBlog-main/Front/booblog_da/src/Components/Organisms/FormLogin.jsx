import FormGroup from '../Molecules/FormGrup';
import "./FormLogin.css"; 
import Button from '../Atoms/ButtonTemp';
import { Link } from 'react-router-dom';

const Formlogin = () => {
  return (
    <div className="form-side">
      <h2>Bienvenido</h2>
      <form>
        <FormGroup label="Correo" type="email" id="correo" name="correo" />
        <FormGroup label="Contraseña" type="password" id="contrasena" name="contrasena" />
        <Link to="/">
        <Button type="submit">Iniciar</Button>
        </Link>

        <div className="register-link">
          <Link to="/registrer">¿Aún no tienes cuenta? Regístrate</Link>
        </div>
      </form>
    </div>
  );
};

export default Formlogin;
