import { Box, Grid, Typography } from "@mui/material";
import styled, { keyframes } from "@mui/styled-engine";

export const HomePageContainer = styled(Grid)`
  @media screen and (min-width: 768px) {
    padding-top: 8rem;
  }
`;

export const HomePageHeading = styled(Typography)`
  margin-bottom: 2rem;
`;

export const HomePageImageContainer = styled(Grid)`
  max-height: 320px;
  height: 100%;
`;

export const HomePageImage = styled("img")`
  max-width: 30rem;
  width: 100%;
  height: auto
  margin: 0 auto;
  border-radius: 28px;
`;

export const HomePageBottomContainer = styled(Box)`
  text-align: center;
  padding-top: 1.2rem;
  @media screen and (min-width: 768px) {
    padding-top: 4rem;
  }
`;

export const HomePageHeadingSlider = styled("div")`
  height: 50px;
  padding-left: 15px;
  overflow: hidden;
`;
