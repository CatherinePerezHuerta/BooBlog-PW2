import Title from '../Atoms/Title';
import Button from '../Atoms/ButtonTemp';
import './Header.css'
import { Link } from 'react-router-dom';
import HeaderImage from "../Atoms/HeaderImagen";


const Header = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center p-3 shadow">
      <Link to="/">
      <Title text="BooBlog" level={2} />
      </Link>
            <Link to="/np">Nueva Publicacion</Link>
      <div className="user-menu d-flex align-items-center">
      <Link to="/profile">
      <HeaderImage src="/imagenes/perfil.jpg" alt="Perfil" />
      </Link>
      <Link to="/login">Cerrar</Link>
      </div>
    </header>
  );
};

export default Header;