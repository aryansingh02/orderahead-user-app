/* eslint-disable react/no-unused-prop-types */
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';

interface IProps {
  stallName: string;
  rating: number;
  type: string[];
  distance: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    overlay: {
      position: 'absolute',
      height: '100%',
      top: '0%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
      borderRadius: '10px',
    },
    ratingGrid: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginBottom: theme.spacing(1.2),
    },
    nameDiv: {
      fontSize: '30px',
      color: 'white',
      marginBottom: '10px',
      fontWeight: 700,
    },
  })
);

export const StallSummary = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      <Grid
        item
        lg={9}
        md={10}
        xs={11}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Typography component="div" className={classes.nameDiv}>
          {props.stallName}
        </Typography>
        <div className={classes.ratingGrid}>
          <Typography
            component="div"
            style={{ marginTop: 'auto', color: 'white' }}
          >
            $$${' '}
            <span role="img" aria-label="abcd">
              ☕ 🍪{' '}
            </span>
          </Typography>
          <Typography
            component="div"
            style={{ marginTop: 'auto', color: 'white' }}
          >
            <img
              src="/img/rating.svg"
              height="12px"
              width="12px"
              alt="rating icon"
            />{' '}
            {props.rating} <img src="/img/Vector.svg" alt="rating icon" />
            50ft
          </Typography>
        </div>
      </Grid>
    </div>
  );
};
