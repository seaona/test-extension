import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';
import { createExternalExtensionProvider } from '@metamask/providers';
import LocalMessageDuplexStream from 'post-message-stream';

export async function providerOld() {

  // set MetaMask provider
  const prov = createMetaMaskProvider();
  const web3 = new Web3(prov);

  // get MetaMask data
  const accounts = await web3.eth.requestAccounts();
  const account = accounts[0];
  console.log(account)

  const balance = await web3.eth.getBalance(account)
  console.log(balance)

  // perform MetaMask action
  await web3.eth.personal.sign('This is a message from Test Extension', account.toLowerCase(), '');
}


export async function providerNew() {

  // set MetaMask provider
  const provider = createExternalExtensionProvider();
  console.log(provider)

  provider.request({ method: 'eth_requestAccounts'  })
  // perform MetaMask action
  await window.ethereum.personal.sign('This is a message from the Test Extension', window.ethereum.selectedAddress.toLowerCase(), '');
}