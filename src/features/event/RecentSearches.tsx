import React from 'react';
import Grid from '@material-ui/core/Grid';
import { WithStyles, withStyles, createStyles, Box } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '../../Typography';
import { theme as Theme } from '../../theme';
import { recentSearches } from '../../data/testData';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    searchText: {
      fontWeight: 'normal',
      fontSize: '16px',
      color: '#979797',
    },
    searchTextRow: {
      marginTop: '20px',
    },
    searchRowText: {
      marginLeft: '11.5px',
    },
    expandIcon: {
      color: '#979797',
    },
    searchIcon: {
      color: '#979797',
    },
    searchRow: {
      padding: '11px 0',
    },
  });

interface IProps extends WithStyles<typeof styles> {
  query: string;
}

interface IState {}

class RecentSearches extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  filterSearches = () =>
    recentSearches.filter((search) => search.indexOf(this.props.query) !== -1);

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid
            item
            xs={12}
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.searchTextRow}
          >
            <Typography
              roboto={true}
              className={classes.searchText}
              display="inline"
            >
              Recent Searches
            </Typography>
            <Box className="centreJustifiedFlex">
              <Typography
                roboto={true}
                className={classes.searchText}
                display="inline"
              >
                8 More
              </Typography>
              <ExpandLessIcon className={classes.expandIcon} />
            </Box>
          </Grid>
          {this.filterSearches().map((search) => (
            <Grid
              className={classes.searchRow}
              item
              xs={12}
              container
              direction="row"
              key={search}
              justify="space-between"
            >
              <Box className="centreJustifiedFlex">
                <SearchIcon className={classes.searchIcon} />
                <Typography
                  roboto={true}
                  className={classes.searchRowText}
                  variant="body1"
                  display="inline"
                >
                  {search}
                </Typography>
              </Box>
              <CloseIcon className={classes.searchIcon} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(RecentSearches);
