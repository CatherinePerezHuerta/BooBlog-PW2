// src/components/Molecules/ChatArea.jsx
import React from 'react';
import Message from '../Atoms/Mensaje';
import MessageInput from '../Atoms/InputMensaje';

const ChatArea = ({ messages, newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <div className="chat-area">
      <div className="message-list">
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} text={message.text} isSent={message.sender === "Yo"} />
        ))}
      </div>

      <MessageInput value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onSend={handleSendMessage} />
    </div>
  );
};

export default ChatArea;
