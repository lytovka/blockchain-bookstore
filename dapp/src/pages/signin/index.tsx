import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { PageLayout } from "~/components";
import { useWeb3Context } from "~/contexts/Web3Context";

const Home: NextPage = () => {
  const { handleSignIn, account } = useWeb3Context();
  return (
    <div>
      <Head>
        <title>Blockchain Bookstore Sign in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        {account ? (
          <>
            <Typography fontSize="2rem" variant="h1">
              Your account is: {account}
            </Typography>
          </>
        ) : (
          <button onClick={handleSignIn}>Sign in</button>
        )}
      </PageLayout>
      <footer></footer>
    </div>
  );
};

export default Home;
