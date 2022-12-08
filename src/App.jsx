import "./App.scss";
import Users from "./Components/Users/Users";
import team from "../src/Data/names";
import Header from "./Components/Header/Header";
import SearchBox from "./Components/SearchBox/SearchBox";
import { useState } from "react";


// Main App where everything is diplayed
// need to make state to control the search term
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [filtered, setFiltered] = useState("");


// This function that handles the search term for the (user)
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };



// This function filters the data so that its all lowercase & if the display matches the searchterm it will display else displays all users
   
  const filtered = team.filter((user) => {
    console.log(user);
    const userLowerCase = user.name.toLowerCase();
    return userLowerCase.includes(searchTerm) && user;
  });
  
  // setFiltered(filtered);

  
// The jsx of the application 
  return (
    <div className="App">
      <Header />
      <div className="App__search">
        <h2>Please enter a name below</h2>
        <div className="App__search--box">
          <SearchBox handleInput={handleInput} />
        </div>
      </div>
      <div className="App__users">
      {/* Ternary to display either filtered data or the whole of the data/ team */}
        <Users users={filtered.length > 0 ? filtered : team} />
      </div>
    </div>
  );
}

export default App;
