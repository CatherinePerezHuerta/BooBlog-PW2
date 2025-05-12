import { useState } from 'react';
import FormGroup from '../Molecules/FormGrup';
import "./FormLogin.css";
import Button from '../Atoms/ButtonTemp';
import { Link, useNavigate } from 'react-router-dom';

const Formlogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5005/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.correo,
          password: formData.contrasena
        })
      });

      const result = await response.json();

      if (response.ok) {
        alert('Login exitoso');
        // Redirigir al home o dashboard
        navigate('/');
      } else {
        alert(`Error: ${result.message || 'Error al iniciar sesión'}`);
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión');
    }
  };

  return (
    <div className="form-side">
      <h2>Bienvenido</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup label="Correo" type="email" id="correo" name="correo" onChange={handleChange} />
        <FormGroup label="Contraseña" type="password" id="contrasena" name="contrasena" onChange={handleChange} />
        <Button type="submit">Iniciar</Button>

        <div className="register-link">
          <Link to="/registrer">¿Aún no tienes cuenta? Regístrate</Link>
        </div>
      </form>
    </div>
  );
};

export default Formlogin;
