// src/components/Atoms/Message.jsx
import React from 'react';
import './Mensaje.css'

const Message = ({ sender, text, isSent }) => {
  return (
    <div >
      <span className="message-sender">Hola</span>
      <p className="message-text">Hola</p>
    </div>
  );
};

export default Message;
