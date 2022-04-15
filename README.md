## Getting Started

This dapp is built on top of [`Truffle`](https://trufflesuite.com/) and [`Next.js`](https://nextjs.org/)

1. Install dependencies

Ensure that you're using the version of Node that is specified in `~/.nvmrc` file before installing dependencies or running this project locally. This will lock your local Node version for the project to prevent unexpectedly large changes in `package-lock.json` file. Using `nvm` command:

```bash
nvm use # pick node version from .nvmrc file
npm install
```

2. Set up local instance of [`Ganache`](https://trufflesuite.com/ganache/) blockchain.

You will need to install `Ganache` to fire up local Ethereum blockchain. This blockchain will execute Solidity contracts from `~/contracts` folder.

Inside `Ganache`, create a new Ethereum workspace. Next, click on the Gear icon (:gear:) and navigate to `Workspace`. Add new truffle project by supplying the path to your `truffle-config.js` file. 

3. Deploy contracts to `Ganache`

From the project's terminal window, compile smart contracts and migrate them to your local `Ganache` instance. 

If you want to have `truffle` installed globally:
```bash
npm install -g truffle 

truffle compile # compile *.sol files locally

truffle migrate # deploy contracts to Ganache blockchain

truffle console

exec "./add-books.js" #use this inside the truffle console to populate the blockchain with books
```
Alternatively,
```bash
npx truffle compile

npx truffle migrate

npx truffle console

exec "./add-books.js" #use this inside the truffle console to populate the blockchain with books
```

4. Run the development server

```bash
cd dapp # navigate to the folder where the Next.js project at.

npm install # install Next.js deps

npm run dev # fire dev server
```
Open http://localhost:3000 in your browser to see the result.
