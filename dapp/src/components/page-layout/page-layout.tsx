import { Box, Container } from "@mui/material";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import { Navbar } from "..";

interface IGenericPageLayoutProps {
  children: boolean | ReactChild | ReactFragment | ReactPortal | null;
  fixedBar?: boolean;
  maxWidth?: "md" | "lg";
}

export const PageLayout = ({
  children,
  maxWidth = "lg",
}: IGenericPageLayoutProps) => {
  return (
    <Box height="100vh">
      <Navbar />
      <Container
        sx={{ paddingBottom: "4rem", paddingTop: "4rem" }}
        maxWidth={maxWidth}
      >
        {children}
      </Container>
    </Box>
  );
};
