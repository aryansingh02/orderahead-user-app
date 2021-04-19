import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonStyle: {
      border: '0.475px solid #E3E3E3',
      borderRadius: '3.8px',
      height: '18px',
      width: '18px',
      minWidth: '18px !important',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      boxShadow: 'none',
    },
  })
);

export const AddDelete = () => {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);
  const displayCount = count > 0;

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={classes.buttons}>
      <Button onClick={handleIncrement} className={classes.buttonStyle}>
        +
      </Button>
      {count}
      {displayCount && (
        <Button onClick={handleDecrement} className={classes.buttonStyle}>
          -
        </Button>
      )}
    </div>
  );
};
