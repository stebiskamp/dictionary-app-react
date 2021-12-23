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
        <footer>
          <a
            href="https://github.com/stebiskamp/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source coded
          </a>{" "}
          by Stephanie Biskamp
        </footer>
      </div>
    </div>
  );
}

export default App;
