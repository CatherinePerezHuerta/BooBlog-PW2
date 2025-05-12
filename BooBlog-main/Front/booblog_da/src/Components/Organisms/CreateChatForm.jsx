import React from 'react';
import Input from '../Atoms/Input';
import Label from '../Atoms/Label';
import Button from '../Atoms/ButtonTemp';
import "./CreateChatForm.css";
import { Link } from 'react-router-dom';

const CreateChatForm = () => {
  return (
    <form className="form-create-chat">
      <h2>Crear Chat</h2>

      <div className="form-group">
        <Label>Nombre del Chat</Label>
        <Input type="text" />
      </div>

      <div className="form-group">
        <Label>Miembro 1</Label>
        <Input type="text" />
      </div>

      <div className="form-group">
        <Label>Miembro 2</Label>
        <Input type="text" />
      </div>

      <div className="form-group">
        <Label>Miembro 3</Label>
        <Input type="text" />
      </div>

      <div className="form-group">
        <Label>Miembro 4</Label>
        <Input type="text" />
      </div>

      <div className="form-group">
        <Label>Miembro 5</Label>
        <Input type="text" />
      </div>
      <Link to="/chat">
      <Button>Crear Chat</Button>
      </Link>
    </form>
  );
};

export default CreateChatForm;

