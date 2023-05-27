import React, { useState } from 'react';

const AboutMe = () => {
  const [aboutText, setAboutText] = useState(''); // Estado para almacenar el texto del perfil
  const [editing, setEditing] = useState(false); // Estado para controlar si se está editando o no

  // Manejador de cambios en el texto del perfil
  const handleInputChange = (event) => {
    setAboutText(event.target.value);
  };

  // Manejador de clic en el botón "Modificar"
  const handleEditClick = () => {
    setEditing(true);
  };

  // Manejador de clic en el botón "Guardar"
  const handleSaveClick = () => {
    setEditing(false);
  };

  return (
    <div>
      <h2>About Me</h2>
      {editing ? (
        <div>
          <textarea
            value={aboutText}
            onChange={handleInputChange}
            placeholder="Enter your about me text"
          />
          <button onClick={handleSaveClick}>Guardar</button>
        </div>
      ) : (
        <div>
          <p>{aboutText}</p>
          <button onClick={handleEditClick}>Modificar</button>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
