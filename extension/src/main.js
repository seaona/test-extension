/*global chrome*/
import Web3 from 'web3'
import  { MetamaskInpageProvider } from 'metamask-inpage-provider'
import PortStream from 'extension-port-stream'

export async function provider() {
  const METAMASK_EXTENSION_ID = 'oejhglpjccoedjbbdaafbgajppbmicle';
  const metamaskPort =chrome.runtime.connect(METAMASK_EXTENSION_ID);
  const pluginStream = new PortStream(metamaskPort);
  const web3Provider = new MetamaskInpageProvider(pluginStream);
  const web3 = new Web3(web3Provider);

  console.log(metamaskPort)
  console.log(pluginStream)
  console.log(web3Provider)
  console.log(web3)

  const chainId = JSON.stringify(web3Provider.chainId)
  console.log(chainId)
  
  const address = await web3.eth.getAccounts();
  console.log(JSON.stringify(address))
  await web3.eth.sendTransaction({                           
      from: address[0],                           
      to: '0x1C53dc20D1E36ed8359250dE626ACAe36BD28a29',
      value: web3.utils.toWei('0.000001'),                        
  });                      

}