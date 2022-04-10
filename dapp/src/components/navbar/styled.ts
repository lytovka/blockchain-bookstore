import { AppBar, Box, styled, Toolbar } from "@mui/material";

export const CustomAppBar = styled(AppBar)((props) => ({
  backgroundColor: props.theme.palette.grey[800],
}));

export const CustomToolbar = styled(Toolbar)((props) => ({
  maxWidth: props.theme.breakpoints.values["lg"],
  width: "100%",
  padding: "0",
  justifyContent: "space-between",
  margin: "0 auto",
}));

export const MenuItems = styled(Box)({
  overflowX: "scroll",
  display: "flex",
  gap: 16,
});
