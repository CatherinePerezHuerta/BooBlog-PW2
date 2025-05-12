import { useState } from 'react';
import FormGroup from '../Molecules/FormGrup';
import Button from '../Atoms/ButtonTemp';
import { Link } from 'react-router-dom';

const FormRegistrer = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    username: '',
    correo: '',
    contrasena: '',
    fotoPerfil: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const data = new FormData();
  data.append('username', formData.username);
  data.append('email', formData.correo);
  data.append('password', formData.contrasena);
  if (formData.fotoPerfil) {
    data.append('avatar', formData.fotoPerfil);
  }

  try {
    const response = await fetch('http://localhost:5005/api/users/register', {
      method: 'POST',
      body: data
    });

    const result = await response.json();
    if (response.ok) {
      alert('Registro exitoso');
    } else {
      alert(`Error: ${result.error}`);
    }
  } catch (error) {
    console.error(error);
    alert('Error en el registro');
  }
};

  return (
    <div className="form-side">
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup label="Nombre" type="text" id="nombre" name="nombre" onChange={handleChange} value={formData.nombre} />
        <FormGroup label="Apellidos" type="text" id="apellidos" name="apellidos" onChange={handleChange} value={formData.apellidos} />
        <FormGroup label="Usuario" type="text" id="username" name="username" onChange={handleChange} value={formData.username} />
        <FormGroup label="Correo" type="email" id="correo" name="correo" onChange={handleChange} value={formData.correo} />
        <FormGroup label="Contraseña" type="password" id="contrasena" name="contrasena" onChange={handleChange} value={formData.contrasena} />
        <FormGroup label="Foto de perfil" type="file" accept="image/*" id="fotoPerfil" name="fotoPerfil" onChange={handleChange} />
        <Button type="submit">Registrarse</Button>

        <div className="login-link">
          <Link to="/login">¿Ya tienes cuenta? Bienvenido</Link>
        </div>
      </form>
    </div>
  );
};

export default FormRegistrer;
