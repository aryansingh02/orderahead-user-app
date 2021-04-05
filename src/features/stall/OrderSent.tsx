import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: { minWidth: '420px' },
    navigationRoot: {},
    paperRoot: {
      height: '88px',
      width: '88px',
      background: '#C5F2C7',
      borderRadius: '99px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonRoot: {
      width: '100%',
      marginTop: 'auto',
    },
    textRoot: {
      marginTop: theme.spacing(8.2),
      textAlign: 'center',
    },
    minorText: {
      maxWidth: '263px',
      textAlign: 'center',
      fontWeight: 400,
    },
    contentGrid: {
      height: '100%',
      padding: theme.spacing(4),
    },
    orderButton: {
      borderRadius: '30px',
      marginBottom: theme.spacing(2),
    },
    upperhalfGrid: {
      marginTop: 'auto',
    },
    orderTime: {
      display: 'flex',
      alignItems: 'center',
      color: ' #6D5CFF',
      textAlign: 'center',
    },
    orderdetails: {
      marginTop: theme.spacing(2),
      textAlign: 'center',
    },
    orderTimeGrid: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  })
);

export default function OrderSent() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="xs"
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignContent="center"
          className={classes.contentGrid}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignContent="center"
            className={classes.upperhalfGrid}
          >
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              direction="column"
            >
              <Paper elevation={0} className={`${classes.paperRoot} clicker`}>
                <img
                  src="/img/check.png"
                  alt="business icon"
                  width="44px"
                  height="33px"
                />
              </Paper>
            </Grid>
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              direction="column"
              className={classes.textRoot}
            >
              <Typography variant="h5" component="div">
                Your Order Was Sent
              </Typography>
            </Grid>
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              direction="column"
              className={classes.orderdetails}
            >
              <Typography variant="body2" component="div">
                Order # 602C52KP312806
              </Typography>
            </Grid>
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              direction="column"
              className={classes.orderdetails}
            >
              <Typography
                variant="body2"
                component="div"
                className={classes.minorText}
              >
                Thank you for your order! You can receive your items from the
                vendor chosen
              </Typography>
            </Grid>
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              direction="column"
              className={classes.orderTimeGrid}
            >
              <Typography
                variant="body2"
                component="div"
                className={classes.orderTime}
              >
                <img
                  src="/img/WaitTime.png"
                  alt="Timer"
                  width="20px"
                  height="14px"
                  style={{ paddingRight: '10px' }}
                />
                Тime to prepare the order - 2 min
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            justify="space-around"
            alignItems="center"
            direction="column"
            className={classes.buttonRoot}
          >
            <Button
              className={classes.orderButton}
              fullWidth
              variant="contained"
              color="primary"
            >
              Track Order
            </Button>

            <Button
              className={classes.orderButton}
              fullWidth
              variant="outlined"
              disableElevation={true}
              color="primary"
            >
              New Order
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
