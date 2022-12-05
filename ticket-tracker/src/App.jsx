import "./App.scss";
import Users from "./Components/Users/Users";
import team from "../src/Data/names";
import Header from "./Components/Header/Header";
import SearchBox from "./Components/SearchBox/SearchBox";
import { useState } from "react";



function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [rawData, setRawData] = useState(team)
  const [filtered, setFiltered] = useState("")
  
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);

    const filtered = rawData.filter(user => {
      console.log(user);
      const userLowerCase = user.name.toLowerCase();
      return userLowerCase.includes(searchTerm) && user.name
    }) 
    setFiltered(filtered)
    console.log(filtered);
  };

  return (
    <div className="App">
      <Header />
      <SearchBox  handleInput={handleInput} />
      <div className="App__details">
        {/* <div className="App__users">{UserInfo}</div> */}
      </div>
      <div className="App__users">
      {filtered.length ? <Users users={filtered} />:<Users users={rawData} />}
      </div>
      <div>
      
      </div>
    </div>
    
  );
}

export default App;
