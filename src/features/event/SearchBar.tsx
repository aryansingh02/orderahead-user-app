import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(4),
    border: '1px solid #E3E3E3',
    boxSizing: 'border-box',
    borderRadius: '8px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} elevation={0}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <img src="/img/search_adorn_start.png" />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Times Square, Manhattan, NY..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <img src="/img/input_adorn_end.png" />
      </IconButton>
    </Paper>
  );
}
