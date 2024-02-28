import React, { useState } from 'react'
import  '../styles/styles.css'

const Form = ({user,setUser,setShow}) => {
  console.log(user)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.nombre.length < 3) {
        setErrorMessage("El nombre debe tener al menos 3 caracteres")
        setShowError(true)
    }
    else if (/^\s/.test(user.nombre)) {
      setErrorMessage("El nombre no debe tener espacios vacios")
      setShowError(true)
  }
    else if (user.apellido.length < 7) {
        setErrorMessage("El apellido debe tener al menos 6 caracteres")
        setShowError(true)
    }
    else{
    setShowError(false)
    setShow(true)
}
}
  return (
    <div className='form-container'>
        <h2>Formulario Examen Front-End</h2>
        <form onSubmit={handleSubmit} className='form-content' >
            <label>Nombre</label>
            <input className='input-field' onChange={(e)=> setUser({...user, nombre:e.target.value})} type="text" />
            <label>Apellido</label>
            <input className='input-field' onChange={(e)=> setUser({...user, apellido:e.target.value})} type="text" />
            <label>Película Favorita</label>
            <input className='input-field' onChange={(e)=> setUser({...user, peliculaFavorita:e.target.value})} type="text" />
            <button type='submit'>enviar</button>

        </form>
        {showError && <h2 className='error-message'>{errorMessage}</h2>}
        
    </div>
  )
}

export default Form