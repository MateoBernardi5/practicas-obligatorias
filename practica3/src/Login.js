import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleRegister = () => {
    if (username === '' || username.toLowerCase().includes('o')) {
      alert('Usuario inválido para registrarse');
    } else {
      alert('¡Usuario registrado correctamente!');
    }
  };

  return (
    <div>
      Username:
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
      />
      <br></br>
      <button onClick={handleRegister}> Registrarse </button>
      <p>{username}</p>
    </div>
  )
}

export default Login
