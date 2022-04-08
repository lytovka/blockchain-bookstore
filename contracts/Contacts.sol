//SPDX-License-Identifier: MIT
pragma solidity >=0.8.x;

contract Contacts {
  uint public count = 0; // state variable

  struct Contact {
		uint id;
		string name;
		string phone;
	}

	constructor() public {
		createContact('Ivan', '11111111');
		createContact('Vlad', '22222222');
	}

	mapping(uint => Contact) public contacts;

	function createContact(string memory _name, string memory _phone) public {
		count++;
		contacts[count] = Contact(count, _name, _phone);
	}
}