import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

export const connectToAccount = async (): Promise<string> => {
  const accounts = await web3.eth.requestAccounts();
  return accounts[0];
};
