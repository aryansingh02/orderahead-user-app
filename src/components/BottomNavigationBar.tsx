import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExploreIcon from '@material-ui/icons/Explore';
import PieChartIcon from '@material-ui/icons/PieChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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

interface IProps {}

export default function BottomNavigationBar(props: IProps) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Dashboard"
        icon={<img src="/img/shifty_eyes.svg" />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="Browse"
        icon={<img src="/img/map_icon.svg" />}
      />
      <BottomNavigationAction
        className={classes.navigationAction}
        label="My Profile"
        icon={<img src="/img/cart_icon.svg" />}
      />
    </BottomNavigation>
  );
}
