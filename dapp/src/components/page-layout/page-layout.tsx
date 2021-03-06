import { Box, Container } from '@mui/material';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Navbar } from '~/components';

interface IGenericPageLayoutProps {
  children: boolean | ReactChild | ReactFragment | ReactPortal | null;
  fixedBar?: boolean;
  maxWidth?: 'md' | 'lg';
}

export const PageLayout = ({
  children,
  maxWidth = 'lg',
}: IGenericPageLayoutProps) => {
  return (
    <Box height="100vh">
      <Navbar />
      <Container
        sx={{ paddingBottom: '4rem', paddingTop: '4rem' }}
        maxWidth={maxWidth}
      >
        <main>{children}</main>
      </Container>
    </Box>
  );
};
