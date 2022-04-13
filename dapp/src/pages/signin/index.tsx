import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import type { NextPage } from 'next';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useWeb3Context } from '~/contexts/Web3Context';

const SignIn: NextPage = () => {
  const router = useRouter();
  const { signIn } = useWeb3Context();
  const [inputError, setInputError] = useState(false);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const currentName = data.get('name');
    if (!currentName || typeof currentName !== 'string') {
      setInputError(true);
      return;
    }
    try {
      await signIn(currentName);
      router.push('/');
      setInputError(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Head>
        <title>Blockchain Bookstore | Sign in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 8,
          }}
        >
          <Avatar sx={{ bgcolor: 'secondary.main', m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSignIn}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={inputError}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Guest Name"
              name="name"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mb: 2, mt: 3 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      <footer></footer>
    </div>
  );
};

export default SignIn;
