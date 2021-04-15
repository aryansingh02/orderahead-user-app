/* eslint-disable react/no-unused-prop-types */
import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { BackButton } from '../../components/BackButton';

interface IProps {
  itemName: string;
  logoUrl: string;
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
    parentGrid: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      marginBottom: theme.spacing(1.2),
    },
    contentGrid: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    itemname: {
      fontSize: '30px',
      color: 'white',
      fontWeight: 700,
    },
    stallLogo: {
      border: '1px solid white',
      borderRadius: '8px',
      background: 'white',
    },
  })
);

export const ItemName = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      <Grid item xs={11} lg={11} style={{ width: '100%' }}>
        <BackButton />
      </Grid>
      <Grid item lg={8} md={10} xs={11} className={classes.parentGrid}>
        <div className={classes.contentGrid}>
          <Grid
            item
            lg={6}
            xs={7}
            style={{ marginTop: 'auto', color: 'white' }}
          >
            <Typography className={classes.itemname}>
              {props.itemName}
            </Typography>
          </Grid>
          <Grid
            item
            lg={2}
            xs={4}
            style={{ marginTop: 'auto', textAlign: 'end' }}
          >
            <img
              src={props.logoUrl}
              alt="rating icon"
              className={classes.stallLogo}
            />
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
