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
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
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
      marginTop: theme.spacing(6.3),
    },
    textRoot: {
      marginTop: theme.spacing(8),
    },
    minorText: {
      maxWidth: '202px',
      textAlign: 'center',
      fontWeight: 700,
    },
    plainCheckout: {
      fontSize: '14px',
      borderStyle: 'none',
      color: 'red',
    },
    contentGrid: {
      height: '100%',
      padding: theme.spacing(4),
    },
    skipcheckout: {
      borderRadius: '30px',
      fontSize: '14px',
    },
  })
);

export default function AddedToCart() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const history = useHistory();
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
            <Typography
              variant="body2"
              component="div"
              className={classes.minorText}
            >
              Ultimate Breakfast Wrap was added to cart
            </Typography>
          </Grid>
          <Grid
            container
            item
            justify="space-around"
            alignItems="center"
            direction="column"
            className={classes.buttonRoot}
          >
            <Grid item>
              <Button
                className={classes.skipcheckout}
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => history.push('/cart')}
              >
                Checkout and Skip The Line for $1.05
              </Button>
            </Grid>
            <Grid item>
              <Button
                fullWidth
                variant="outlined"
                disableElevation={true}
                className={classes.plainCheckout}
                onClick={() => history.push('/stall/:id')}
              >
                Continue Shopping
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
