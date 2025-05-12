import NPForm from "../Organisms/NPublicacion";
import "./Registrer.css"; 
import { Link } from 'react-router-dom';

const NP = () => {
  return (
    <div className="container-fluid">

      <div>
      <NPForm />
      </div>
            <div className="image-side">
        <img className="side" src="/imagenes/glitch.gif" alt="side" />
      </div>
    </div>
  );
};

export default NP;