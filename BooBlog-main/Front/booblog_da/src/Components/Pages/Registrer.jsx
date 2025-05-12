import RegisterForm from "../Organisms/FormRegistrer";
import "./Registrer.css"; 

const Registrer = () => {
  return (
    
    <div className="container-fluid">
      <div className="image-side">
        <img className="side" src="/imagenes/glitch.gif" alt="side" />
      </div>
      <div>
      <RegisterForm />
      </div>
    </div>
  );
};

export default Registrer;
