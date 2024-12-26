import React, {useState} from 'react'
import './Modal.css'

const Modal = ({isOpen, set}) => {
    if(isOpen){
        const [peso, setPeso] = useState(0);
        const [altura, setAltura] = useState(0);
        const [imcState, setImcState] = useState(0);

        function tratarMudancaPeso(event){
            setPeso(event.target.value);
        }

        function calcularImc(event){
            if(peso <= 0){
                alert("Insira um peso válido");
                return;

            }if(altura <= 0){
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
                    <h2>Calcule seu imc</h2>
                    <form>
                        <label htmlFor="peso">Peso: </label> <br />
                        <input type="number" name='peso' value={peso} onChange={tratarMudancaPeso} id='peso' />

                        <br />

                        <label htmlFor="altura">Altura: </label><br />
                        <input type="number" name='altura' value={altura}  onChange={event => setAltura(event.target.value)} id='altura' />
                        <br />
                        <input type="button" value="Calcular Imc" onClick={calcularImc} />
                        <br />
                        <b>Seu IMC é: </b>{imcState}



                    </form>
                    <br />

                    <button onClick={()=> set(!isOpen)}>fechar</button>

                </div>
            </div>
          )
    }
 
}

export default Modal