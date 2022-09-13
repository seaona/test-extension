import { initializeProvider } from '@metamask/providers';
import LocalMessageDuplexStream from 'post-message-stream';

// Create a stream to a remote provider:
export async function provider() {
  const metamaskStream = new LocalMessageDuplexStream({
    name: 'inpage',
    target: 'contentscript',
  });
  
  // this will initialize the provider and set it as window.ethereum
  initializeProvider({
    connectionStream: metamaskStream,
  });
  console.log(window.ethereum)
}