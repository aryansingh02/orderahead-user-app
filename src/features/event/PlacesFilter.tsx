import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '../../Typography';

import { theme as Theme } from '../../theme';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      marginTop: theme.spacing(4),
      MuiInputRootUnderline: {
        border: 'none !important',
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
    rootSelect: {
      textAlign: 'right',
    },
  });

interface IProps extends WithStyles<typeof styles> {}

interface IState {
  place: string;
}

class PlacesFilter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      place: 'distance',
    };
  }

  setPlace = (place: string) => {
    this.setState({ place });
  };

  render() {
    const { classes } = this.props;
    const { place } = this.state;
    return (
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid alignItems="center" item xs={6}>
            <Typography variant="h4" display="inline">
              Nearby Places
            </Typography>
          </Grid>
          <Grid container justify="flex-end" item xs={6}>
            <FormControl className={classes.formControl}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={place}
                onChange={(evt, value) =>
                  this.setPlace(evt.target.value as string)
                }
                disableUnderline={true}
                className={classes.rootSelect}
              >
                <MenuItem value="distance">
                  <Typography
                    roboto={true}
                    variant="subtitle1"
                    display="inline"
                  >
                    Sort by Distance
                  </Typography>
                </MenuItem>
                <MenuItem value="ratings">
                  <Typography
                    roboto={true}
                    variant="subtitle1"
                    display="inline"
                  >
                    Sort by Ratings
                  </Typography>
                </MenuItem>
                <MenuItem value="quality">
                  <Typography
                    roboto={true}
                    variant="subtitle1"
                    display="inline"
                  >
                    Sort by Quality
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PlacesFilter);
