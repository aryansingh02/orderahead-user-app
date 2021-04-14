import React from 'react';
import Grid from '@material-ui/core/Grid';
import { RouteComponentProps } from 'react-router-dom';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Hidden from '@material-ui/core/Hidden';
import { theme as Theme } from '../../theme';
import EventHeader from './MobileHeader';
import SearchBar from './SearchBar';
import CategoriesScroll from './CategoriesScroll';
import PlacesFilter from './PlacesFilter';
import { event, stall } from '../../data/testData';
import StallCard from './StallCard';
import WithNavigation from '../../components/BottomNavigationHoc';
import EventMap from './EventMap';
import DesktopHeader from './DesktopHeader';
import { isDesktop } from '../../utils';
import { AppDispatch } from '../../store';
import { getQuery, setQuery } from './EventSlice';
import { RootState } from '../../types';
import FilteredStalls from './FilteredStalls';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: theme.spacing(2),
      paddingTop: isDesktop() ? 0 : '28px',
    },
    headingRow: {},
    accountHeading: {},
    eventPane: {
      maxHeight: '100%',
    },
    leftPane: {
      overflow: 'scroll',
    },
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {
  width: Breakpoint;
  query: string;
}

interface IState {
  stalls: typeof stall[];
}

class Event extends React.Component<IProps, IState> {
  eventContainerRef: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      stalls: [],
    };
    this.eventContainerRef = React.createRef();
  }

  componentDidMount() {
    this.getStalls();
  }

  getStalls = () => {
    this.setState({ stalls: event.stalls });
  };

  calculateDisplay = () => {
    if (isDesktop() && this.props.query) {
      return 'none';
    }
    return 'inherit';
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} ref={this.eventContainerRef}>
        <Hidden mdDown>
          <DesktopHeader />
        </Hidden>

        <Grid container direction="row">
          <Grid
            container
            justify="center"
            item
            xs={12}
            lg={4}
            className={classes.leftPane}
            style={{
              height: isWidthUp('lg', this.props.width)
                ? 'calc(100vh - 87px)'
                : 'calc(100vh - 95px)',
              display: this.calculateDisplay(),
            }}
          >
            <Hidden lgUp>
              <Grid item xs={11}>
                <EventHeader
                  history={this.props.history}
                  location={this.props.location}
                  match={this.props.match}
                />
              </Grid>
            </Hidden>

            <Grid item xs={12} container justify="center">
              <SearchBar />
            </Grid>
            <Grid item xs={12}>
              <CategoriesScroll
                eventRef={this.eventContainerRef}
                callingParent="Event"
              />
            </Grid>
            <Grid item xs={11}>
              <PlacesFilter />
            </Grid>
            <Grid item xs={11} container direction="column">
              {this.state.stalls.map((item) => (
                <StallCard stall={item} key={stall._id} />
              ))}
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignContent="center"
            />
          </Grid>
          {this.props.query && isDesktop() && (
            <Grid
              container
              justify="center"
              item
              xs={12}
              lg={4}
              className={classes.leftPane}
              style={{
                height: isWidthUp('lg', this.props.width)
                  ? 'calc(100vh - 87px)'
                  : 'calc(100vh - 95px)',
              }}
            >
              <Grid item xs={12} container justify="center">
                <FilteredStalls />
              </Grid>
            </Grid>
          )}

          <Grid
            container
            justify="center"
            item
            lg={8}
            className={classes.eventPane}
          >
            <EventMap />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

const mapStateToProps = (state: RootState) => ({
  query: getQuery(state),
});

export default connect(
  mapStateToProps,
  // @ts-ignore
  mapDispatchToProps
  // @ts-ignore
)(withWidth()(withStyles(styles)(WithNavigation(Event))));
