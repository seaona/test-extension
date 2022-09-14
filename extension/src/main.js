import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';
import { createExternalExtensionProvider } from '@metamask/providers';

export async function providerOld() {

  // set MetaMask provider
  const prov = createMetaMaskProvider();
  const web3 = new Web3(prov);

  // connect MetaMask account
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

  // TODO: detect provider package (global)| wait for initialized event
  
  // connect MetaMask account
  const accounts = await provider.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  console.log(account)

  // perform MetaMask action
  await provider.request({ 
    method: 'eth_sign',
    params: [ account, '0x9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08']
  })

}