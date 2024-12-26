import React from 'react'
import './Modal.css'

const Modal = ({isOpen, set}) => {
    if(isOpen){
        return (
            <div className='background'>
                <div className='modal'>
                    <h2>Calcule seu imc</h2>
                    <form>
                        <input type="text"  />
                        <input type="text"  />



                    </form>

                    <button onClick={()=> set(!isOpen)}>fechar</button>

                </div>
            </div>
          )
    }
 
}

export default Modal