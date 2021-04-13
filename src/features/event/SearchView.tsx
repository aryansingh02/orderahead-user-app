import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import {
  createStyles,
  withStyles,
  WithStyles,
  Grid,
  InputAdornment,
  Input,
  Box,
} from '@material-ui/core';
import { theme as Theme } from '../../theme';
import { FilterStalls, isDesktop } from '../../utils';
import WithNavigation from '../../components/BottomNavigationHoc';
import RecentSearches from './RecentSearches';
import FilteredStalls from './FilteredStalls';
import { AppDispatch } from '../../store';
import { RootState } from '../../types';
import { getQuery, setQuery } from './EventSlice';

const styles = (theme: typeof Theme) =>
  createStyles({
    InputRoot: {
      width: '100%',
      height: '65px',
      borderBottomColor: '#E3E3E3',
    },
    root: {
      paddingBottom: '70px',
    },
    icon: {
      color: '#979797',
    },
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {
  center: { lat: number; lng: number };
  zoom: number;
  query: string;
  setQuery: (query: string) => void;
}

interface IState {}

class SearchView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (isDesktop()) {
      this.props.history.push('/event');
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item xs={11}>
          <Input
            className={classes.InputRoot}
            value={this.props.query}
            onChange={(evt) => {
              this.props.setQuery(evt.target.value);
            }}
            id="input-with-icon-textfield"
            startAdornment={
              <InputAdornment position="start">
                <Box
                  onClick={() => this.props.history.push('/event')}
                  className="pointer"
                >
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
          <RecentSearches query={this.props.query} />
        </Grid>
        <Grid item xs={11} container direction="row">
          <FilteredStalls />
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setQuery: (query: string) => {
    dispatch(setQuery(query));
  },
});

const mapStateToProps = (state: RootState) => ({
  query: getQuery(state),
});

export default connect(
  mapStateToProps,
  // @ts-ignore
  mapDispatchToProps
  // @ts-ignore
)(withStyles(styles)(WithNavigation(SearchView)));
