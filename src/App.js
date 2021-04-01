import './App.css';
import People from "./components/people"
import Button from "./components/button"

function App() {
  return (
    <div className="App">
      <h1>List maker 10,000</h1>
      <Button big>Click me</Button>
      <People/>
    </div>
  );
}

export default App;
