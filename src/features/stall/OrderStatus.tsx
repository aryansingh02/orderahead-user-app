import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Hidden,
  Divider,
} from '@material-ui/core';
import React from 'react';
import Currency from 'react-currency-formatter';
import StatusStepper from './StatusStepper';
import Typography from '../../Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
    },
    continueRoot: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
    bodyText: {
      marginTop: '16px',
    },
    outerGrid: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      background: '#F7F8FB',
      overflowY: 'scroll',
    },

    namefield: {
      marginBottom: '20px',
    },
    middleGrid: {
      display: 'flex',
      flexDirection: 'column',
    },
    divider: {
      marginTop: theme.spacing(1.5),
    },
    commonStyle: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(1.9),
    },
    listitem: {
      marginBottom: theme.spacing(1.9),
    },
    collectionGrid: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(3.8),
      marginBottom: theme.spacing(6.2),
    },
  })
);

export const OrderStatus = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid xs={12} sm={12} lg={6} className={classes.outerGrid}>
        <Grid xs={10} sm={10} lg={10} style={{ width: '100%' }}>
          <Grid
            xs={12}
            sm={12}
            lg={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Grid item className={classes.commonStyle}>
              <Typography roboto component="div" variant="body2">
                Order # 602C52KP312806
              </Typography>
              <Typography
                roboto
                component="div"
                variant="subtitle1"
                color="primary"
                style={{ textAlign: 'center' }}
              >
                Detailed receipt
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={11} sm={12} lg={12} className={classes.middleGrid}>
            <Divider className={classes.divider} />
            <Grid item xs={12} sm={12} className={classes.commonStyle}>
              <Typography
                component="div"
                variant="h4"
                style={{ marginBottom: '15px' }}
              >
                Items
              </Typography>
              <Typography
                component="div"
                variant="body1"
                roboto
                className={classes.listitem}
              >
                1 x Ultimate Breakfast Wrap
              </Typography>
              <Typography
                component="div"
                variant="body1"
                roboto
                className={classes.listitem}
              >
                1 x Caramel Oat Latte, Mini
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.commonStyle}>
              <Typography component="div" variant="h4">
                Amount Paid
              </Typography>
              <Typography
                roboto
                variant="h3"
                style={{ marginTop: '15px' }}
                color="primary"
              >
                <Currency quantity={19.25} currency="USD" />
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} style={{ marginTop: '30px' }}>
              <Typography component="div" variant="h4">
                Updates
              </Typography>
              <StatusStepper />
            </Grid>
            <Grid item xs={12} sm={12} className={classes.collectionGrid}>
              <Typography
                component="div"
                variant="h4"
                style={{ marginBottom: '13px' }}
              >
                Collection Point
              </Typography>
              <Typography component="div" variant="body1" roboto>
                6:00 AM / March 27, 2021
              </Typography>
              <Typography component="div" variant="body1" roboto>
                Costa Coffee - 220 E 42nd St, NY 10017-5806
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Grid lg={6}>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${'/img/status.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
      </Hidden>
    </div>
  );
};
