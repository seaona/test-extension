# Test Extension
This is a simple extension that can be used for testing the use of MetaMask provider from another extension.

![popup](./images/popup.png)

## MV2 and MV3
This repository provides 2 types of extension, that you can load using the different github branches:
- `main` branch is a Manifest V2 Chrome extension and should be paired with a MetaMask MV2 version
- `mv3` branch is a Manifest V3 Chrome extension and should be paired with a MetaMask MV3 version

## Relevant Code
There are 2 approaches trying different dependencies.

### metamask-extension-provider
- The `extension/src/main.js` file contains the necessary code for importing MetaMask provider.
- This function is then called on `extension/src/App.js`.

### @metamask/providers
- The `background.js` file contains the necessary code for importing MetaMask provider from the background script.

### MV2 vs MV3
- On the file `manifest.json` the extension is defined either as an MV2 or an MV3 type.

## Setup
1. Install MetaMask on Chrome
2. Clone this repository
3. Change to extension folder and install dependencies `cd extension npm i`
4. Build the extension `npm run extension`
5. Import extension root folder into Chrome
6. Click Connect to MetaMask
7. Check background console and verify that `window.ethereum` is injected correctly

## TODO
- [ ] Connect to MetaMask using MV2
- [ ] Connect to MetaMask using MV3
