import logo from './logo.svg';
import tomatoIcon from './tomato.png';
import './App.css';
import "@fontsource/monoton"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo-header'>
          <img src={tomatoIcon} className="tomato-logo flicker-slow" alt="logo" />
          <p className='neon'>
            RANCID TO<span className="flicker-fast">M</span>A<span className="flicker-fast">T</span>OES
          </p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
