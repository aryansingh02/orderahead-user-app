/* eslint-disable react/no-unused-prop-types */
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React from 'react';
import { StallSummary } from './StallSummary';
import { ItemName } from './ItemName';

interface IProps {
  bannerImage: string;
  callingParent: string;
  stallName?: string;
  rating?: number;
  type?: string[];
  distance?: number;
  itemName?: string;
  logoUrl?: string;
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
      <img src={props.bannerImage} className={classes.stallImg} alt="" />
      {props.callingParent === 'StallMenu' ? (
        <StallSummary
          stallName="Costa Coffee"
          rating={4.6}
          type={['Coffee', 'Desert']}
          distance={51}
        />
      ) : (
        <ItemName
          itemName={props && props.itemName ? props.itemName : ''}
          logoUrl={props && props.logoUrl ? props.logoUrl : ''}
        />
      )}
    </div>
  );
};
