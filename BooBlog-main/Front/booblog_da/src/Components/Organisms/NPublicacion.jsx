import { useState } from 'react';
import FormGroup from '../Molecules/FormGrup';
import "./FormLogin.css";
import Button from '../Atoms/ButtonTemp';
import { Link, useNavigate } from 'react-router-dom';

const FormNPublicacion = () => {
  return (
    <div className="form-side">
      <h2>Bienvenido</h2>
      <form>
        <FormGroup label="Título de la publicación" type="text" id="titulo" name="titulo"  />
        <FormGroup label="Texto de la publicación" type="textarea" id="texto" name="texto"/>
        <FormGroup label="Imagen" type="file" id="imagen" name="imagen" />

        <Button type="submit">Crear</Button>

      </form>
    </div>
  );
};

export default FormNPublicacion;