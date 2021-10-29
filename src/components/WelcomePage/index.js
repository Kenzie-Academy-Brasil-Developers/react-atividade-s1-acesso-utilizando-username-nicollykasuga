import './style.css'
export default function WelcomePage ({name,setIsLoggedIn}){
    function HandleLogout(){
        setIsLoggedIn(false)
    }
    return(
    <>
        <h2>Bem-vindo(a), {name}!</h2>
        <button className="Botao1" onClick={() => HandleLogout()}>Sair</button>
    </>)
    };