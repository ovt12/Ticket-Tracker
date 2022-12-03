import './App.scss'
import Counter from './Components/Counter/Counter';
import User from "./Components/User/User";
import Data from "./Data/names"
import team from "../src/Data/names"
import Header from "./Components/Header/Header"




function App() {

const UserInfo = team.map(data => {
  return <User name={data.name} role={data.role}/>
})




  return (
    <div className="App">
        <div className='App__heading'>
            <Header/>
            <h2>{UserInfo}</h2>
        </div>
    </div>
  );
}

export default App;
