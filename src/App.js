import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> World's most amazing dictionary</h1>
        <h2> What word are you looking for?</h2>
        <header className="App-header">
          <SearchEngine />
        </header>
      </div>
    </div>
  );
}

export default App;
