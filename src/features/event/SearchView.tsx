import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { RouteComponentProps } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import {
  createStyles,
  withStyles,
  WithStyles,
  Grid,
  TextField,
  InputAdornment,
  Input, Box,
} from '@material-ui/core';
import { theme as Theme } from '../../theme';

import config from '../../config';
import { FilterStalls, isDesktop } from '../../utils';
import WithNavigation from '../../components/BottomNavigationHoc';
import { IStall } from '../../types';
import { event as Event } from '../../data/testData';
import StallCard from './StallCard';

const styles = (theme: typeof Theme) =>
  createStyles({
    InputRoot: {
      width: '100%',
      height: '65px',
      borderBottomColor: '#E3E3E3',
    },
    icon: {
      color: '#979797',
    },
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {
  center: { lat: number; lng: number };
  zoom: number;
}

interface IState {
  query: string;
  filteredStalls: IStall[];
}

class SearchView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      query: '',
      filteredStalls: Event.stalls,
    };
  }

  componentDidMount() {
    if (isDesktop()) {
      this.props.history.push('/event');
    }
  }

  componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
    if (prevState.query !== this.state.query) {
      this.filterStalls();
    }
  }

  filterStalls = () => {
    const newStalls = FilterStalls(Event.stalls, this.state.query);
    this.setState((state, props) => ({
      filteredStalls: newStalls,
    }));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid item xs={11}>
          <Input
            className={classes.InputRoot}
            value={this.state.query}
            onChange={(evt) => this.setState({ query: evt.target.value })}
            id="input-with-icon-textfield"
            startAdornment={
              <InputAdornment position="start">
                <Box onClick={() => this.props.history.push('/event')} className='pointer'>
                  <ArrowBackIosIcon className={classes.icon} />
                </Box>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="start">
                <SearchIcon className={classes.icon} />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={11} container direction="row">
          {this.state.filteredStalls.map((item) => (
            <StallCard stall={item} key={item._id} />
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(WithNavigation(SearchView));
