import './App.css';
import { provider } from './main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={provider}>
          Connect to MetaMask
        </button>
      </header>
      <div className="App-body">
        <div>
          MetaMask Chain Id: 
        </div>
        <div>
          MetaMask Selected Address: 
        </div>
      </div>
    </div>
  );
}

export default App;