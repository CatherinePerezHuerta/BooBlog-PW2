
import SidebarItem from '../Molecules/SidebarItem';
import Button from '../Atoms/ButtonTemp';
import Title from '../Atoms/Title';
import './Sidebar.css'
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Title text="Mis Grupos" level={3} />
        <Link to="/createchat">
        <Button className="btn btn-new-group">+ Nuevo Chat</Button>
        </Link>
      </div>

      <ul className="group-list list-unstyled">
        <SidebarItem to="/chat" text="Mi chat" />
      </ul>
    </nav>
  );
};

export default Sidebar;
