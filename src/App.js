import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> What word are you looking for?</h1>
        <header className="App-header">
          <SearchEngine />
        </header>
      </div>
    </div>
  );
}

export default App;
