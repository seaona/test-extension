import './App.css';
import { providerOld, providerNew } from './main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-body">

        <div>
          Using metamask-extension-provider
        </div>
        <button onClick={providerOld}>
          Connect to MM and Sign
        </button>

        <div>
          Using @metamask/providers
        </div>
        <button onClick={providerNew}>
          Connect to MM and Sign
        </button>
        
      </div>
    </div>
  );
}

export default App;