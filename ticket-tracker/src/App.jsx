import "./App.scss";
import User from "./Components/User/User";
import team from "../src/Data/names";
import Header from "./Components/Header/Header";

function App() {
  const UserInfo = team.map((data) => {
    return <User name={data.name} role={data.role} />;
  });

  return (
    <div className="App">
      <Header />
      <div className="App__details">
        <div className="App__users">{UserInfo}</div>
      </div>
    </div>
  );
}

export default App;
