import createMetaMaskProvider from 'metamask-extension-provider';
import Web3 from 'web3';

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
  await web3.eth.personal.sign('Test', account.toLowerCase(), '');
}