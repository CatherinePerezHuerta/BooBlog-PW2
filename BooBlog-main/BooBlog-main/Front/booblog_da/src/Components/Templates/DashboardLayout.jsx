
import Sidebar from '../Organisms/Sidebar';
import Header from '../Organisms/Header';
import ChatArea from '../Organisms/ChatArea';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="p-3">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

