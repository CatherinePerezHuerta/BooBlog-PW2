import React, { useState } from 'react';
import Input from '../Atoms/Input';
import Label from '../Atoms/Label';
import Button from '../Atoms/ButtonTemp';
import './CreateChatForm.css';
import { Link } from 'react-router-dom';

const CreateChatForm = () => {
  const [miembros, setMiembros] = useState(['']); // empieza con 1 campo vacío

  const handleAddMiembro = () => {
    setMiembros([...miembros, '']);
  };

  const handleChange = (index, value) => {
    const nuevosMiembros = [...miembros];
    nuevosMiembros[index] = value;
    setMiembros(nuevosMiembros);
  };

  return (
    <form className="form-create-chat">
      <h2>Crear Chat</h2>

      <div className="form-group">
        <Label>Nombre del Chat</Label>
        <Input type="text" />
      </div>

      {miembros.map((miembro, index) => (
        <div className="form-group" key={index}>
          <Label>Miembro {index + 1}</Label>
          <Input
            type="text"
            value={miembro}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}

      <div className="form-group">
        <button type="button" className="btn-agregar" onClick={handleAddMiembro}>
          + Agregar Miembro
        </button>
      </div>

      <Link to="/chat">
        <Button>Crear Chat</Button>
      </Link>
    </form>
  );
};

export default CreateChatForm;


