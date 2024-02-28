import React from 'react'

const Card = ({user}) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <h3>Hola {user.nombre} {user.apellido}</h3>
        <h3>Su pelicula favorita es: {user.peliculaFavorita}</h3>
      </div>
    </div>
  )
}

export default Card