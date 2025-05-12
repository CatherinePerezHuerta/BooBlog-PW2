
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ChatBox from '../Molecules/ChatBox';
import ChatsLayout from '../Templates/ChatsLayout';

//*Agregar las tarjetas*

const Chats = () => {
  return (
    <ChatsLayout>
          <ChatBox/>
    </ChatsLayout>
  );
};

export default Chats;
