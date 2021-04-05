import { makeStyles, Theme, createStyles, Paper } from '@material-ui/core';
import React from 'react';
import BannerImage from '../../assets/CostaDesktop.png';
import { StallSummary } from './StallSummary';

interface IProps {
  // eslint-disable-next-line react/no-unused-prop-types
  bannerImage: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
    stallImg: {
      objectFit: 'cover',
      width: '100%',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      maxHeight: '40vh',
      minHeight: '20vh',
    },
  })
);

export const StallBanner = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <img src={BannerImage} className={classes.stallImg} alt="" />
      <StallSummary
        stallName="Costa Coffee"
        rating={4.6}
        type={['Coffee', 'Desert']}
        distance={51}
      />
    </div>
  );
};
