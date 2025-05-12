
import Sidebar from '../Organisms/Sidebar';
import Header from '../Organisms/Header';
import ChatArea from '../Organisms/ChatArea';


const ChatsLayout = () => {
    return (
      <div className="dashboard-container">
        <Sidebar />
        
        <div className="main-content">
          <Header />
        </div>

          <main className="p-3">
            <ChatArea />
          </main>
      </div>
    );
  };

export default ChatsLayout;