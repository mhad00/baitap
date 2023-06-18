import "./App.css";
import MainItem from "./mainitem.js";
function App() {
  return (
    <div>
      <div className="App">
        <div className="section">
          <input
            type="text"
            placeholder="Enter your text"
            className="input"
          ></input>

          <MainItem />

          <div className="bottom">
            <h3>5 tasks left!</h3>
            <h3>Mindx todolist</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
