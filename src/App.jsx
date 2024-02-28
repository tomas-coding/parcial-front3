import Card from "./components/Card"
import Form from "./components/Form"
import React, { useState } from 'react'

function App() {
  
  const [user, setUser] = useState({
    nombre:"",
    apellido:"",
    peliculaFavorita:""
})
const [show,setShow] = useState(false)
  return (
    <>      
      <Form user={user} setUser={setUser} setShow={setShow}/>
      {show && <Card user={user}/>}
    </>
  )
}

export default App
