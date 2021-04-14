import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { HistoryType } from '../types';

const useStyles = makeStyles({
  root: {
    width: '100%',
    filter: 'drop-shadow(0px 1px 12px rgba(0, 0, 0, 0.12))',
    height: '60px',
  },
  navigationAction: {
    width: '33%',
  },
});

interface IProps {
  history: HistoryType;
}

export default function BottomNavigationBar(props: IProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue === 1) {
          props.history.push('/map');
        }
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Browse"
        icon={<img src="/img/shifty_eyes.svg" />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Map View"
        icon={<img src="/img/map_icon.svg" />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Cart"
        icon={<img src="/img/cart_icon.svg" />}
      />
    </BottomNavigation>
  );
}
