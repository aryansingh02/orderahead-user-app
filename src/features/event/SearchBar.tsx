import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { isDesktop } from '../../utils';
import { theme as Theme } from '../../theme';

const useStyles = makeStyles((theme: typeof Theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.spacing(4),
    border: isDesktop() ? 'none' : '1px solid #E3E3E3',
    boxSizing: 'border-box',
    borderRadius: isDesktop() ? 'none' : '8px',
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
    <Grid item container xs={isDesktop() ? 12 : 11}>
      <Paper
        component="form"
        className={classes.root}
        elevation={0}
        style={{
          backgroundImage: isDesktop()
            ? `url('img/EventBackground.png')`
            : 'none',
          height: isDesktop() ? '280px' : 'auto',
          position: isDesktop() ? 'relative' : 'inherit',
          marginTop: isDesktop() ? 0 : Theme.spacing(4),
        }}
      >
        <Grid
          container
          direction="row"
          item
          xs={isDesktop()? 10: 11}
          style={{
            background: isDesktop() ? '#FFFFFF' : 'none',
            position: isDesktop() ? 'absolute' : 'inherit',
            top: isDesktop() ? '30px' : 'inherit',
            left: isDesktop() ? '50%' : 'inherit',
            transform: isDesktop() ? 'translate(-50%, 0)' : 'inherit',
            borderRadius: isDesktop() ? '8px' : 'none',
          }}
        >
          <IconButton className={classes.iconButton} aria-label="menu">
            <img src="/img/search_adorn_start.png" />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Times Square, Manhattan, NY..."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          {!isDesktop() && (
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <img src="/img/input_adorn_end.png" />
            </IconButton>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
}
