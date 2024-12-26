import  { useState } from 'react'
import './Main.css'
import Modal from '../modal/Modal'

const Main = () => {

  const [open, setOpen ] = useState(false)

  return (
    
    <>
      <h1>Conteudo Principal</h1>
      <br /><br />

      <h3>Imc</h3>
      <button onClick={() => setOpen(!open)}>Calcule imc</button>
      <Modal isOpen ={open} set ={setOpen}/>
    </>
  )
}

export default Main