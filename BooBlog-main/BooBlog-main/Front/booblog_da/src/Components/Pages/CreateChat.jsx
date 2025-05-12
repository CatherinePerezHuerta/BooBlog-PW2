import React from 'react';
import CreateChatForm from '../Organisms/CreateChatForm';
import './CreateChat.css';
import Header from '../Organisms/Header';

const CreateChatPage = () => {
    return (
        <div className="container-fluid">
                    <Header />
          <div className="image-side">
            <img className="side" src="/imagenes/glitch3.gif" alt="side" />
          </div>
          <div>
          <CreateChatForm />
          </div>
    
        </div>
      );
};

export default CreateChatPage;
