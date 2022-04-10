import { useState } from "react";
import Web3 from "web3";
import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
// import { CONTACT_ABI } from "../configs/config";

const Home: NextPage = () => {
  const [account, setAccount] = useState(""); // state variable to set account.
  // const [contactList, setContactList] = useState<Contract>();
  // const [contacts, setContacts] = useState<any>([]);

  // TODO: move Web3 logic to global-scope context
  const handleSignIn = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = await web3.eth.requestAccounts();
    console.log({ accounts });
    setAccount(accounts[0]);
  };

  return (
    <div>
      <Head>
        <title>Blockchain Bookstore</title>
        <meta
          name="description"
          content="Dapp for renting books in a bookstore"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {account ? (
          <>
            <Typography variant="h1">Your account is: {account}</Typography>
          </>
        ) : (
          <button onClick={handleSignIn}>Sign in</button>
        )}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
