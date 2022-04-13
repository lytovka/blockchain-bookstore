const Migrations = artifacts.require("Migrations");
const BookstoreItem = artifacts.require("BookstoreItem");
const Bookstore = artifacts.require("Bookstore");


module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(BookstoreItem);
  deployer.deploy(Bookstore);
};
