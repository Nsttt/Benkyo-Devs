import React, { useState, useEffect } from 'react';
import UserInfo from '@/components/header/user/user-info';
import ProfileForm from '@/components/perfil/form-perfil/Profileform';
import ProfileInfo from '@/components/perfil/info-perfil/ProfileInfo';



// const AboutMe = ({ currentUser }) => {
//   const [aboutText, setAboutText] = useState('');
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     fetchAboutText();
//   }, []);

//   const fetchAboutText = async () => {
//     try {
//       const response = await fetch('/api/perfil/about');
//       const data = await response.json();
//       const { text } = data;
//       setAboutText(text);
//     } catch (error) {
//       console.log('Error al obtener el texto del perfil', error);
//     }
//   };

//   const saveAboutText = async () => {
//     try {
//       await fetch('/api/perfil/about', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ text: aboutText })
//       });
//       console.log('Texto del perfil guardado exitosamente');
//     } catch (error) {
//       console.log('Error al guardar el texto del perfil', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setAboutText(event.target.value);
//   };

//   const handleEditClick = () => {
//     setEditing(true);
//   };

//   const handleSaveClick = () => {
//     setEditing(false);
//     saveAboutText();
//   };

//   return (
//     <div className='m-4'>
//       <h2 className='p-1'>About Me</h2>
//       {editing ? (
//         <div>
//           <textarea
//           className='m-4'
//             value={aboutText}
//             onChange={handleInputChange}
//             placeholder="Escribe algo sobre tí"
//           />
//           <button onClick={handleSaveClick} className='border-2 p-1 text-white bg-cyan-600 align-bottom rounded-lg shadow-lg float-right mb-2'>Guardar</button>
//         </div>
//       ) : (
//         <div>
//           <p className='text-sky-800 p-2'>{aboutText}</p>
//           {/* {currentUser && currentUser.id === profileOwnerId && ( */}
//           <button onClick={handleEditClick} className='border-2 p-1 text-white bg-cyan-600 flex flex-row align-bottom rounded-lg shadow-lg float-right mb-2'>Modificar</button>
//            {/* )} */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AboutMe;





const AboutMe = ({about}) => {


  
  const [editing, setEditing] = useState(false);
  // const [aboutText, setAboutText] = useState();

  // useEffect(() => {
  //   fetchAboutText();
  // }, []);

  // const fetchAboutText = async () => {
  //   try {
  //     const response = await fetch('/api/perfil/about');
  //     const data = await response.json();
  //     const { text } = data;
  //     setAboutText(text);
  //   } catch (error) {
  //     console.log('Error al obtener el texto del perfil', error);
  //   }
  // };

  // const saveAboutText = async () => {
  //   try {
  //     await fetch('/api/perfil/about', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ text: aboutText })
  //     });
  //     console.log('Texto del perfil guardado exitosamente');
  //   } catch (error) {
  //     console.log('Error al guardar el texto del perfil', error);
  //   }
  // };

  // const handleInputChange = (event) => {
  //   setAboutText(event.target.value);
  // };

  // const handleEditClick = () => {
  //   setEditing(true);
  // };

  // const handleSaveClick = () => {
  //   setEditing(false);
  //   saveAboutText();
  // };

  const user = {
    username: 'Carol',
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.',
    avatar: 'https://images.unsplash.com/photo-1621574539436-4b0b0b0b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVua3lvJTIwY2Fyb2wlMjBhdmF0YXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    points: {
      easy: 101,
      medium: 102,
      hard: 103
    }
  }
  
  return (
    <section id='user'>
      <UserInfo/>
      <div className='p-5'>
        <h3 className='font-bold'>About me</h3>
        <p>{about}</p>
        <button 
          onClick={() => setEditing(true)}
          type='button'
          className='mt-3 w-[120px] bg-sky-600 text-white rounded-md p-2'
        >
            Editar
        </button>
          {
           editing
              ? <ProfileForm user={user.username} avatar={user.avatar} about={user.about} setEditing={setEditing} />
              : "NO funciona, y en tamaño pequeño, al darle a editar, sobrescribe el siguiente componente"
          }
      </div>
      
         </section>


    // <div className='m-4'>
    //   <h2 className='p-1'>About Me</h2>
    //   {editing ? (
    //     <div>
    //       <textarea
    //       className='m-4 border-2 p-1 text-sky-800 bg-white align-bottom rounded-lg shadow-lg float-right mb-2'
    //         value={aboutText}
    //         onChange={handleInputChange}
    //         placeholder="Escribe algo sobre tí"
    //       />
    //       <button onClick={handleSaveClick} className='border-2 p-1 text-white bg-cyan-600 align-bottom rounded-lg shadow-lg float-right mb-2'>Guardar</button>
    //     </div>
    //   ) : (
    //     <div>
    //       <p className='text-sky-800 p-2'>{aboutText}</p>
    //       {/* {currentUser && currentUser.id === profileOwnerId && ( */}
    //       <button onClick={handleEditClick} className='border-2 p-1 text-white bg-cyan-600 flex flex-row align-bottom rounded-lg shadow-lg float-right mb-2'>Modificar</button>
    //        {/* )} */}
    //     </div>
    //   )}
    // </div>
  );
};

export default AboutMe;