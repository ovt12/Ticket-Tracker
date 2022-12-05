import "./App.scss";
import Users from "./Components/Users/Users";
import team from "../src/Data/names";
import Header from "./Components/Header/Header";
import SearchBox from "./Components/SearchBox/SearchBox";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState("");

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);

    const filtered = team.filter((user) => {
      console.log(user);
      const userLowerCase = user.name.toLowerCase();
      return userLowerCase.includes(searchTerm) && user;
    });
    setFiltered(filtered);
    console.log(filtered);
  };

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
        <Users users={filtered.length > 0 ? filtered : team} />
      </div>
    </div>
  );
}

export default App;
