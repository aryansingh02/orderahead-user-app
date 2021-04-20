import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, createStyles, WithStyles, withStyles } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { RouteComponentProps } from 'react-router-dom';
import EventMap from './EventMap';
import { theme as Theme } from '../../theme';
import WithNavigation from '../../components/BottomNavigationHoc';
import AutoCompleteService from './AutoCompleteService';
import { isDesktop } from '../../utils';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 60px)',
      width: '100%',
      position: 'relative',
    },
    searchContainer: {
      position: 'absolute',
      top: '30px',
      width: '90%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      zIndex: 1000,
      height: '48px',
      backgroundColor: '#FFFFFF',
    },
    backIcon: {
      position: 'absolute',
      top: '90px',
      left: '7.5%',
      transform: 'translate(-50%, 0)',
      zIndex: 1000,
      backgroundColor: '#FFFFFF',
      padding: '10px',
      borderRadius: '50%',
    },
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

interface IState {
  place: string;
}

class MapView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      place: 'distance',
    };
  }

  componentDidMount() {
    if (isDesktop()) {
      this.props.history.push('/event');
    }
  }

  setPlace = (place: string) => {
    this.setState({ place });
  };

  render() {
    const { classes } = this.props;
    const { place } = this.state;
    return (
      <Grid container item direction="row" xs={12} className={classes.root}>
        <Grid xs={12} item container className={classes.searchContainer}>
          <AutoCompleteService />
        </Grid>
        <Box
          className={classes.backIcon}
          onClick={() => this.props.history.goBack()}
        >
          <KeyboardBackspaceIcon />
        </Box>
        <EventMap />
      </Grid>
    );
  }
}

export default withStyles(styles)(WithNavigation(MapView));
