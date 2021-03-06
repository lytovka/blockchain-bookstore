import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getListedItems, handleItemPurchase } from '~/api/web3';
import { PageLayout } from '~/components';
import { useWeb3Context } from '~/contexts/Web3Context';
import books from '~/data/books.json';

const BookstorePage = () => {
  const { account } = useWeb3Context();
  const [availableBooks, setAvailableBooks] = useState<typeof books>([]);
  const [listedItems, setListedItems] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetch = async () => {
      const itemIds = await getListedItems();
      const BOOKS_TO_VIEW = books.filter((book) =>
        Object.values(itemIds).includes(book.link)
      );
      setAvailableBooks(BOOKS_TO_VIEW);
      setListedItems(itemIds);
    };
    fetch();
  }, []);

  

  const handleBuyBook = async (link : string) => {
    try {
      if (account && account.accountAddress) {
        const itemId = Object.keys(listedItems).find(key => listedItems[key] === link);
        if (itemId) {
          const intItemId = parseInt(itemId);
          await handleItemPurchase(intItemId, account?.accountAddress);
        }
      }
    } catch (error) {
      console.error('App: could not purchase the book', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Blockchain Bookstore | Bookstore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Bookstore Stock
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Fast and secure way to rent out your favorite books. No
            intermediaries. No problems
          </Typography>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {availableBooks.map((card) => (
              <Grid item key={card.link} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={card.imageLink}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      fontSize={'1rem'}
                      fontStyle="italic"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {card.author} - {card.year}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" onClick={() => handleBuyBook(card.link)}>
                      Purchase book
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </PageLayout>
    </div>
  );
};

export default BookstorePage;
