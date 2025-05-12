import { Link } from 'react-router-dom';
import Title from '../Atoms/Title';

const SidebarItem = ({ to, text }) => {
  return (
    <Link to={to} className="sidebar-item">
      <Title text={text} level={3} />
    </Link>
  );
};

export default SidebarItem;