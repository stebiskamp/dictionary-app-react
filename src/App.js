import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <SearchEngine />
        </header>
      </div>
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
  );
}

export default App;
