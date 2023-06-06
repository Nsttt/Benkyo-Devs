import React, { useState } from 'react';
import UserInfo from '@/components/header/user/user-info'
import Points from '@/components/perfil/points/points';

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

const ProfileInfo = ({ user, setEditing }) => {
  const { about } = user
  return (
    <>
      <h3 className='font-bold'>About me</h3>
      <p>{about}</p>
      <button 
        onClick={() => setEditing(true)}
        type='button'
        className='mt-3 w-[120px] bg-sky-600 text-white rounded-md p-2'
      >
          Editar
      </button>
    </>
  )
}

const ProfileForm = ({ _user, setEditing }) => {

  // const [user, setUser] = useState({..._user})

  const handleClickSave = () => {
    setEditing(false)
    console.log('envía los datos al api')
  }

  return (
    <form className='flex flex-col'>
      
      <label htmlFor='username' className='font-bold'>Username</label>
      <input
        type='text'
        className='mt-3 border-2 p-2 bg-white align-bottom rounded-lg shadow-lg mb-2'
        placeholder='User here'
        // value={user.username}
        // onChange={(e) => setUser({ ...user, username: e.target.value }) }
      />

      <label htmlFor='username' className='font-bold'>Avatar</label>
      <input
        type='text'
        className='mt-3 border-2 p-2 bg-white align-bottom rounded-lg shadow-lg mb-2'
        placeholder='Imagen here'
        // value={user.avatar}
      />

      <label htmlFor='avatar' className='font-bold'>About</label>
      <textarea 
        cols='30'
        rows='10'
        className='mt-3 border-2 p-1 bg-white align-bottom rounded-lg shadow-lg mb-2' 
        placeholder='Escribe algo sobre tí'
        // value={user.about}
      />

      <button
        type='button'
        onClick={() => handleClickSave()}
        className='mt-3 w-[120px] bg-sky-600 text-white rounded-md p-2'
      >
          Guardar
      </button>
    </form>
  )
}

const AboutMe = () => {


  
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

  return (
    <section id='user' className='shadow-lg p-3'>
      <UserInfo />
      <div className='p-5'>
        {
          editing 
            ? <ProfileForm user={user} setEditing={setEditing} />
            : <ProfileInfo user={user} setEditing={setEditing} />
        }
      </div>
      <hr />
      <div>
        <Points/>
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



// import UserInfo from '@/components/header/user/user-info'
// import AboutMe from '@/components/perfil/aboutme/about-me'

// import React from 'react'
// import Layout from '@/components/layouts/app'

// function perfil() {
//   return (
    
   
        
//             <div className='grid grid-cols-1 lg:grid-cols-3  gap-5 lg:grid-rows-4 p-8'>
//                 <section id='user' className='shadow-lg col-start-1 w-full h-full '>
//                     <UserInfo/>
//                 </section>

//                 <section id='points' className='shadow-lg text-sky-600 col-start-2 col-span-2 box-border w-full h-full'>
//                     <p>points</p>
//                 </section>

//                 <section id='about' className='shadow-lg text-sky-600 col-start-2 col-span-2 w-full h-full'>
//                 <AboutMe/>
//                 </section>

//                 <section id='start' className='shadow-lg text-sky-600 col-start-2 col-span-1 w-full h-full'>
//                     <p>start</p>
//                 </section>

//                 <section id='decks' className='shadow-lg text-sky-600 col-start-1 w-full h-full'>
//                     <p>decks</p>
//                 </section>

//                 <section id='saves' className='shadow-lg text-sky-600 col-start-2 w-full h-full'>
//                     <p>saves</p>
//                 </section>

//                 <section id='fails' className='shadow-lg text-sky-600 col-start-3 w-full h-full'>
//                     <p>fails</p>
//                 </section>

//             </div>
        
     
//   )
// }

// export default perfil