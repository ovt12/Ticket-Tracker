import './App.scss'
import "../src/Components/Counter/Counter"

function App() {
  return (
    <div className="App">
        <div className='App__heading'>
            <h1>Ticket Tracker</h1>
            <Counter/>
        </div>
    </div>
  );
}

export default App;
