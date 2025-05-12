// src/components/Atoms/MessageInput.jsx
import React from 'react';
import './ImputMensaje.css'

const MessageInput = ({ value, onChange, onSend }) => {
  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        className="message-input"
        value={value}
        onChange={onChange}
      />
      <button className="send-btn" onClick={onSend}>Enviar</button>
    </div>
  );
};

export default MessageInput;
