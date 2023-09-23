import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth(); // Obtiene la instancia de Auth de Firebase

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, correo, password);
      // El usuario se ha autenticado correctamente
      // Redirige al usuario a la página principal o donde desees
    } catch (error) {
      // Muestra un mensaje de error si la autenticación falla
      setError('Correo electrónico o contraseña incorrecta');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo:</label>
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
