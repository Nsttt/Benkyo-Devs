import React, { useState, useEffect } from 'react';

const AboutMe = ({ currentUser }) => {
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
    <div className='m-4'>
      <h2 className='p-1'>About Me</h2>
      {editing ? (
        <div>
          <textarea
          className='m-4'
            value={aboutText}
            onChange={handleInputChange}
            placeholder="Escribe algo sobre tí"
          />
          <button onClick={handleSaveClick} className='border-2 p-1 text-white bg-cyan-600 align-bottom rounded-lg shadow-lg float-right mb-2'>Guardar</button>
        </div>
      ) : (
        <div>
          <p className='text-sky-800 p-2'>{aboutText}</p>
          {/* {currentUser && currentUser.id === profileOwnerId && ( */}
          <button onClick={handleEditClick} className='border-2 p-1 text-white bg-cyan-600 flex flex-row align-bottom rounded-lg shadow-lg float-right mb-2'>Modificar</button>
           {/* )} */}
        </div>
      )}
    </div>
  );
};

export default AboutMe;

