import LoginForm from "../Organisms/FormLogin";
import "./Registrer.css"; 
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="image-side">
        <img className="side" src="/imagenes/glitch.gif" alt="side" />
      </div>
      <div>
      <LoginForm />
      </div>
    </div>
  );
};

export default Login;