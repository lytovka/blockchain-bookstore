import { AppBar, Box, styled, Toolbar } from "@mui/material";

export const CustomAppBar = styled(AppBar)((props) => ({
  backgroundColor: props.theme.palette.grey[800],
}));

export const CustomToolbar = styled(Toolbar)((props) => ({
  justifyContent: "space-between",
  margin: "0 auto",
  maxWidth: props.theme.breakpoints.values["lg"],
  padding: "0",
  width: "100%",
}));

export const MenuItems = styled(Box)({
  display: "flex",
  gap: 16,
  overflowX: "scroll",
});
