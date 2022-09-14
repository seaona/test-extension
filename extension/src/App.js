import './App.css';
import { providerOld } from './main';

function App() {
  const address = "";
  const balance = "";
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={providerOld}>
          Connect to MetaMask
        </button>
      </header>
      <div className="App-body">
        <div>
          MetaMask Selected Address: {address}
        </div>
        <div>
          Selected Address Balance: {balance}
        </div>
      </div>
    </div>
  );
}

export default App;