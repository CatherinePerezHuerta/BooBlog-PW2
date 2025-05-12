import Sidebar from '../Organisms/Sidebar';
import Header from '../Organisms/Header';
import FormPerfil from '../Organisms/Publicacion';

const PublicacionLayout = () => {
    return (
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <main >
          <FormPerfil /> 
          </main>
        </div>


      </div>
    );
  };

  export default PublicacionLayout;