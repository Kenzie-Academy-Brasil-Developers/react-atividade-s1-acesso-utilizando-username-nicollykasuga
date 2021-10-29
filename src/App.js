import './App.css';
import GetUser from './components/GetUserComponent/index';
import WelcomePage from './components/WelcomePage/index';
import {useState} from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState (false)
  const [name, setName] =useState ('')
  return (
    <div className="App">
      <header className="Container">
        {isLoggedIn ?
        <div className="UserPage"><WelcomePage name={name} setIsLoggedIn={setIsLoggedIn}/></div>
        :
        <GetUser setName={setName} setIsLoggedIn={setIsLoggedIn}/>}
      </header>
    </div>
  );
}

export default App;
