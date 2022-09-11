# Test Extension
This is a simple extension that can be used for testing MetaMask connection using `metamask-inpage-provider` and `extension-port-stream`.
- `Master` branch is a Manifest V2 Chrome extension
- `MV3` branch will be a Manifest V3 Chrome extension

## Setup
1. Install MetaMask on Chrome
2. Copy MetaMask Extension ID from `chrome://extensions/`
3. Install dependencies `cd extension npm i`
4. Paste MetaMask Extension ID into the variable `METAMASK_EXTENSION_ID` from `src/main.js` file
5. Build the extension `npm run extension`
6. Import extension root folder into Chrome
7. Click Connect to MetaMask

## TODO
- [] Connect to MetaMask using MV2
- [] Connect to MetaMask using MV3