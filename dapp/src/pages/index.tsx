import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Web3 from "web3";
import { Box, Button, Grid } from "@mui/material";
import {
  HomePageContainer,
  HomePageHeading,
  HomePageImage,
  HomePageImageContainer,
} from "./styled";
import { PageLayout } from "../components";

const Home: NextPage = () => {
  const [account, setAccount] = useState(""); // state variable to set account.

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

      <PageLayout>
        <HomePageContainer
          container
          spacing={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={6}>
            <HomePageHeading
              variant="h1"
              fontSize="2.8rem"
              textAlign={"center"}
            >
              Fast and secure way to rent out your favorite books.
              <br /> No intermediaries. No problems
            </HomePageHeading>
            <Box display="flex" gap={3} justifyContent="center">
              <Link href="/signin" passHref>
                <Button variant="contained">Sign in</Button>
              </Link>
              <Link href="/store" passHref>
                <Button color="secondary" variant="contained">
                  Visit our store
                </Button>
              </Link>
            </Box>
          </Grid>
          <HomePageImageContainer item xs={12} lg={6}>
            <HomePageImage
              src={"/home-page/pile-of-books.png"}
              alt="Book Worm Images"
            />
          </HomePageImageContainer>
        </HomePageContainer>
      </PageLayout>

      <footer></footer>
    </div>
  );
};

export default Home;
