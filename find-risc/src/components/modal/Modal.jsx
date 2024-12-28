import React, { useState } from 'react'
import './Modal.css'

const Modal = ({ isOpen, set }) => {
    if (isOpen) {
        const [peso, setPeso] = useState(0);
        const [altura, setAltura] = useState(0);
        const [imcState, setImcState] = useState(0);

        function tratarMudancaPeso(event) {
            setPeso(event.target.value);
        }

        function calcularImc(event) {
            if (peso <= 0) {
                alert("Insira um peso válido");
                return;

            } if (altura <= 0) {
                alert("insira uma altura válida");
                return;

            }
            let imc;
            imc = peso / (altura * altura);
            setImcState(imc.toFixed(2));
        }


        return (

            <div className='background'>


                <div className='modal'>
                    <button className='fechar' onClick={() => set(!isOpen)} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 24 24">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg></button>
                    <h2>Calcule seu imc</h2>
                    <form>
                        <label htmlFor="peso">Peso: </label> <br />
                        <input type="number" name='peso' value={peso} onChange={tratarMudancaPeso} id='peso' />

                        <br />

                        <label htmlFor="altura">Altura: </label><br />
                        <input type="number" name='altura' value={altura} onChange={event => setAltura(event.target.value)} id='altura' />
                        <br /><br />
                        <input className='button' type="button" value="Calcular Imc" onClick={calcularImc} />
                        <br /><br />
                        <b>Seu IMC é: </b>{imcState}

                    </form>
                    <br />
                </div>
            </div>
        )
    }

}

export default Modal