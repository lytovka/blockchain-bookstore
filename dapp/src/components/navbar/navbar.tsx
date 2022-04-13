import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import { CustomAppBar, CustomToolbar, MenuItems } from './styled';
import { useWeb3Context } from '~/contexts/Web3Context';

export const Navbar = () => {
  const { account } = useWeb3Context();
  return (
    <Box>
      <CustomAppBar position="static">
        <CustomToolbar>
          <Box display="flex">
            <Link href={'/'}>Bookstore</Link>
          </Box>
          <MenuItems>
            {account?.accountName ? (
              <Typography>{account.accountName} &#128075;</Typography>
            ) : (
              <Link href="/signin" passHref>
                <Button color="secondary" variant="contained">
                  Sign in
                </Button>
              </Link>
            )}
          </MenuItems>
        </CustomToolbar>
      </CustomAppBar>
    </Box>
  );
};
