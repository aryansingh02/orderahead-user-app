import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  WithStyles,
  withStyles,
  createStyles,
  Box,
  Icon,
} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import { IconContext } from 'react-icons';
import { IoFlashSharp } from 'react-icons/all';
import { GenerateExpenseLevel } from '../../utils';

import { theme as Theme } from '../../theme';
import { IStall } from '../../types';
import Typography from '../../Typography';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      marginTop: theme.spacing(2.5),
      MuiInputRootUnderline: {
        border: 'none !important',
      },
      border: '1px solid #E3E3E3',
      boxSizing: 'border-box',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.05)',
      borderRadius: '10px',
      padding: theme.spacing(1.25),
      backgroundColor: '#FFFFFF',
      cursor: 'pointer',
      '&:hover': {
        border: `1px solid ${Theme.palette.primary.main}`,
        '& h4': {
          color: theme.palette.primary.main,
        },
      },

    },
    stallName: {
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    headingRow: {},
    accountHeading: {},
    logoImage: {
      marginRight: theme.spacing(2.5),
    },
    formControl: {
      width: '150px',
    },
    leftPane: {},
    stallImage: {
      height: '90px',
      width: '120px',
      borderRadius: '4px'
    },
    paneRow: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'nowrap',
    },
    ratingContainer: {
      textAlign: 'right',
    },
    starIcon: {
      marginRight: theme.spacing(0.5),
    },
    rightPane: {
      marginLeft: theme.spacing(2),
      position: 'relative',
    },
    nameRow: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    waitRow: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'flex-end',
      position: 'absolute',
      bottom: 0,
    },
    distanceIcon: {
      height: '16px',
      width: '16px',
      marginRight: '5px',
    },
    coffeeIcon: {
      marginLeft: '5px',
      marginRight: '5px',
      height: '14px',
      width: '14px',
    },
    restoreIcon: {
      transform: 'scale(-1, -1)',
      marginLeft: theme.spacing(2),
      height: '14px'
    },
  });

interface IProps extends WithStyles<typeof styles> {
  stall: IStall;
}

interface IState {}

class StallCard extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, stall } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row" className={classes.paneRow}>
          <Grid item className={classes.leftPane}>
            <img src={stall.logoImagePath} className={classes.stallImage} />
          </Grid>
          <Grid item className={classes.rightPane} container direction="column">
            <Box className={classes.nameRow}>
              <Box>
                <Typography
                  variant="h4"
                  display="inline"
                  className={classes.stallName}
                >
                  {stall.name}
                </Typography>
              </Box>
              <Box>
                <img src="/img/star_icon.png" className={classes.starIcon} />
                <Typography roboto={true} variant="subtitle1" display="inline">
                  {stall.rating}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.nameRow}>
              <Box className="startJustifiedFlex">
                {GenerateExpenseLevel(stall.expenseLevel)}
                <img src="/img/coffee.png" className={classes.coffeeIcon} />
                <img src="/img/cookie.png" className={classes.coffeeIcon} />
              </Box>
              <Box>
                <img src="/img/distance.svg" className={classes.distanceIcon} />
                <Typography roboto={true} variant="subtitle1" display="inline">
                  30ft
                </Typography>
              </Box>
            </Box>
            <Box className={classes.waitRow}>
              <Box className="startJustifiedFlex">
                <IconContext.Provider
                  value={{
                    color: Theme.palette.primary.main,
                    className: 'global-class-name',
                    size: '14px'
                  }}
                >
                  <IoFlashSharp />
                </IconContext.Provider>
                <Typography
                  variant="subtitle1"
                  display="inline"
                  roboto={true}
                  style={{ color: Theme.palette.primary.main }}
                >
                  2 min
                </Typography>
                <RestoreIcon color="error" className={classes.restoreIcon} />
                <Typography
                  variant="subtitle1"
                  display="inline"
                  roboto={true}
                  style={{ color: Theme.palette.error.main }}
                >
                  54 min
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(StallCard);
