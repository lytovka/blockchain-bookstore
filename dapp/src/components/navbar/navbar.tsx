import Link from "next/link";
import { Box, Button } from "@mui/material";
import { CustomAppBar, CustomToolbar, MenuItems } from "./styled";

export const Navbar = () => {
  return (
    <Box>
      <CustomAppBar position="static">
        <CustomToolbar>
          <Box display="flex">
            <Link href={"/"}>Bookstore</Link>
          </Box>
          <MenuItems>
            <Button variant="contained">Sign in</Button>
          </MenuItems>
        </CustomToolbar>
      </CustomAppBar>
    </Box>
  );
};
