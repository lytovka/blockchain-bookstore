/* eslint-disable @typescript-eslint/ban-ts-comment */
import Web3 from 'web3';
import {Contract} from 'web3-eth-contract'
import BookstoreContract from '../../../build/contracts/Bookstore.json'
import BookstoreItemContract from '../../../build/contracts/BookstoreItem.json'

const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

export const connectToAccount = async (): Promise<string> => {
  const accounts = await web3.eth.requestAccounts();
  web3.eth.defaultAccount = accounts[0];
  return accounts[0];
};

const getNetworkId = async (): Promise<number> => {
  return await web3.eth.net.getId();  
};

export const getBookstoreContract = async (): Promise<Contract> => {
  const networkId = await getNetworkId();
  //@ts-ignore
  return new web3.eth.Contract(BookstoreContract.abi, BookstoreContract.networks[networkId].address);
}

export const getBookstoreItemContract = async (): Promise<Contract> => {
  const networkId = await getNetworkId();
  //@ts-ignore
  return new web3.eth.Contract(BookstoreItemContract.abi, BookstoreItemContract.networks[networkId].address);
}

export const getListedItems = async (): Promise<Array<string>> => {
  const bookstoreContract = await getBookstoreContract();
  const bookstoreItemContract = await getBookstoreItemContract();

  const maxItems = await bookstoreContract.methods.getMaxIndex().call();
  const URIArray : Array<string> = [];
  
  for (let i = 1; i <= maxItems; i++) {
    const itemListing = await bookstoreContract.methods.getListing(i).call();
    if (itemListing['status'] == '0') {
      const itemId = itemListing['itemId'];
      const itemURI = await bookstoreItemContract.methods.tokenURI(itemId).call();
      URIArray.push(itemURI);
    }
  }
  return URIArray;
}

