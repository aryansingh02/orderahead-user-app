import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loading: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
  })
);
export const CustomLoading = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <div>
        <img src="/img/Loading1.gif" alt="Loader" height="200px" />
      </div>
    </div>
  );
};
