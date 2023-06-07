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