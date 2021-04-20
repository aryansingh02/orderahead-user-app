import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { isDesktop } from '../../utils';
import { theme as Theme } from '../../theme';

const styles = (theme: typeof Theme) =>
  createStyles({
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
  });

interface IProps extends WithStyles<typeof styles> {}

interface IState {}

class SearchBar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="row" item xs={11}>
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
    );
  }
}

// @ts-ignore
export default withStyles(styles)(SearchBar);
