import { makeStyles, createStyles, Grid, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#263238',
    },
    errorDiv: {
      background: `url(${'/img/WentWrong.gif'})`,
      maxWidth: '100%',
      height: '60vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      margin: `${theme.spacing(2)} 0px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '40px',
    },
  })
);

export const SomethingWrong = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        style={{ height: '100%' }}
      >
        <Grid
          container
          item
          xs={11}
          sm={8}
          lg={4}
          justify="center"
          direction="column"
        >
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div className={classes.errorDiv} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
