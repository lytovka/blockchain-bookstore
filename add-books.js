const bookstore = require('./build/contracts/Bookstore.json')
const bookstoreItem = require('./build/contracts/BookstoreItem.json')
const contract = require('@truffle/contract')
const books = require('./dapp/src/data/books.json')

const bookstoreContract = contract(bookstore);
const bookstoreItemContract = contract(bookstoreItem);

bookstoreContract.setProvider(web3.currentProvider);
bookstoreItemContract.setProvider(web3.currentProvider);

module.exports = async function(callback) {
  const accounts = await web3.eth.getAccounts();

  const store = await bookstoreContract.deployed();
  const item = await bookstoreItemContract.deployed();
  
  //Minting the books
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    const result = await item.mint(accounts[0], book.link, {from : accounts[0]});
    console.log(`Minted ${book.title}`)
  }

  //Approving the book transfer
  for (var i = 1; i <= books.length; i++) {
    const result = await item.approve(store.address, i, {from : accounts[0]});
    console.log(`Approved item ${i}`);
  }

  //listing items on the store
  for (var i = 1; i <= books.length; i++) {
    console.log(`Attempting to list item ${i} on the store`);
    const result = await store.listItem(item.address, i, i*11,{from : accounts[0]});
    console.log(`Success!`);
  }

  return
}