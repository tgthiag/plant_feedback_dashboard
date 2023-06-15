import logo from './logo.svg';
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Body>
        <img src={logo} className="App-logo" alt="logo" />
        </Body>
      </header>
    </div>
  );
}

export default App;
