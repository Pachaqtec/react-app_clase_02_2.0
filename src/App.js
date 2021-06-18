import { useState } from 'react'

import Input from './components/Input/index'

import logo from './logo.svg'
import './App.css';

const Test = ({ children }) => {
  return (
    <div>
      Test 
      {children}
    </div>
  )
}

function App() {
  const [show, setShow] = useState(false)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [dni, setDni] = useState('')

  const handleShowImage = () => {
    setShow((prevState) => !prevState)
  }

  const handleChange = (e, cb) => {
    console.log('e', e.target.value)
    cb(e.target.value)
  }

  return (
    <div className="App">
      <Test>
        <Input
          label="Nombre"
          onChange={(e) => handleChange(e, setNombre)}
          value={nombre}
        />
        <Input
          label="Apellido"
          onChange={(e) => handleChange(e, setApellido)}
          value={apellido}
        />
        <Input
          label="E-mail"
          onChange={(e) => handleChange(e, setEmail)}
          value={email}
        />
        <Input
          label="DNI"
          onChange={(e) => handleChange(e, setDni)}
          value={dni}
        />
      </Test>
      <button onClick={handleShowImage} >{show ? 'Ocultar' : 'Mostrar'} imagen</button>
      {show && (
        <img src={logo} className="App-logo" alt="logo" />
      )}
    </div>
  );
}

export default App;
