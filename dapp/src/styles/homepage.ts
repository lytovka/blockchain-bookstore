import { Grid, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import styled from '@mui/styled-engine';

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

export const HomePageImage = styled('img')`
  max-width: 30rem;
  width: 100%;
  height: auto
  margin: 0 auto;
  border-radius: 28px;
`;

const spin = keyframes`
  0% {margin-top:-100px;} 
  20% {margin-top:-50px;}
  40% {margin-top:-50px;}
  60% {margin-top:0px;}
  80% {margin-top:0px;}
  100% {margin-top:50px;}
`;

export const HomePageHeadingSlider = styled('div')`
  height: 50px;
  overflow: hidden;

  & .item-1 {
    animation: ${spin} 3s linear infinite;
  }
`;

export const HomePageHeadingSliderItem = styled('div')``;
