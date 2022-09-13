# Test Extension
This is a simple extension that can be used for testing MetaMask connection using `@metamask/providers`.
- `main` branch is a Manifest V2 Chrome extension
- `mv3` branch is a Manifest V3 Chrome extension

![popup](./images/popup.png)

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
