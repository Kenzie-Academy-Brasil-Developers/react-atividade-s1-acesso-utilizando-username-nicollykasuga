import {useState} from 'react';
import './style.css'
export default function GetUser({setName, setIsLoggedIn}) {
    const [userInput, setUserInput] = useState ('')

    function HandleLogin(){
        if(userInput === ''){
            return;
        }
        setName(userInput)
        setIsLoggedIn(true)
    }

    return(
        <>
        <h2>Acesso utilizando Username</h2>
        <form>
            <input 
            placeholder="Digite seu nome"
            className="Input"
            type='text'
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}></input>
        </form>
        <button className="Botao" onClick={HandleLogin}>Entrar</button>
        </>
    )
};