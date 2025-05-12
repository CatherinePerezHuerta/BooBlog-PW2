import React, { useState } from 'react';
import './ChatArea.css'

import InputMensaje from '../Atoms/InputMensaje';

const ChatArea = () => {

  return (
    <div className="chat-area">
      <InputMensaje/>
    </div>
  );
};

export default ChatArea;
