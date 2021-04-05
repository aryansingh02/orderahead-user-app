import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from './loadingSlice';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function BackdropContainer() {
  const classes = useStyles();
  const loadingState = useSelector(getLoadingStatus);
  return (
    <div>
      <Backdrop className={classes.backdrop} open={loadingState}>
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
}
