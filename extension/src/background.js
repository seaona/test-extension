import { initializeProvider } from '../node_modules/@metamask/providers';
import LocalMessageDuplexStream from '../node_modules/post-message-stream';

async function providerNew() {

  // set MetaMask provider
  const metamaskStream = new LocalMessageDuplexStream({
    name: 'inpage',
    target: 'contentscript',
  });
  
  // this will initialize the provider and set it as window.ethereum
  initializeProvider({
    connectionStream: metamaskStream,
  });
  console.log(window.ethereum)

  // get MetaMask data
  console.log(window.ethereum.selectedAddress)

  // perform MetaMask action
  await window.ethereum.personal.sign('This is a message from the Test Extension', window.ethereum.selectedAddress.toLowerCase(), '');
}

providerNew();