import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  const [aboutText, setAboutText] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchAboutText();
  }, []);

  const fetchAboutText = async () => {
    try {
      const response = await fetch('/api/perfil/about');
      const data = await response.json();
      const { text } = data;
      setAboutText(text);
    } catch (error) {
      console.log('Error al obtener el texto del perfil', error);
    }
  };

  const saveAboutText = async () => {
    try {
      await fetch('/api/perfil/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: aboutText })
      });
      console.log('Texto del perfil guardado exitosamente');
    } catch (error) {
      console.log('Error al guardar el texto del perfil', error);
    }
  };

  const handleInputChange = (event) => {
    setAboutText(event.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    saveAboutText();
  };

  return (
    <div>
      <h2>About Me</h2>
      {editing ? (
        <div>
          <textarea
            value={aboutText}
            onChange={handleInputChange}
            placeholder="Escribe algo sobre tí"
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

