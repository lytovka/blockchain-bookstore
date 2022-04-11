import Link from "next/link";
import { Box, Button, Link as MuiLink } from "@mui/material";
import { CustomAppBar, CustomToolbar, MenuItems } from "./styled";

export const Navbar = () => {
  return (
    <Box>
      <CustomAppBar position="static">
        <CustomToolbar>
          <Box display="flex">
            <MuiLink
              fontWeight="bold"
              color="secondary"
              component={Link}
              href={"/"}
              passHref
            >
              Bookstore
            </MuiLink>
          </Box>
          <MenuItems>
            <Link href="/signin" passHref>
              <Button color="secondary" variant="contained">
                Sign in
              </Button>
            </Link>
          </MenuItems>
        </CustomToolbar>
      </CustomAppBar>
    </Box>
  );
};
