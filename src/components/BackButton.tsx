import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface IProps {
  header?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    backButton: {
      width: '1.2em',
      height: '1.2em',
    },
    textDiv: {
      marginLeft: theme.spacing(3.9),
    },
  })
);

export const BackButton = (props: IProps) => {
  const classes = useStyles();
  const handleOnClick = () => {
    console.log('Hey');
  };
  return (
    <div className={classes.root}>
      <ChevronLeftIcon
        className={classes.backButton}
        onClick={handleOnClick}
        style={{
          color:
            props && props.header && props.header.length > 0 ? 'gray' : 'white',
        }}
      />
      {props && props.header && props.header.length > 0 && (
        <Typography component="div" variant="h5" className={classes.textDiv}>
          {props.header}
        </Typography>
      )}
    </div>
  );
};
