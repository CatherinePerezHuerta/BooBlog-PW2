import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import Chat from './Components/Pages/Chats';
import Profile from './Components/Pages/Profile';
import Registrer from './Components/Pages/Registrer';
import Login from './Components/Pages/Login';
import CreateChat from './Components/Pages/CreateChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registrer" element={<Registrer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createchat" element={<CreateChat />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
