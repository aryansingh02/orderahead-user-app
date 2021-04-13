import React from 'react';
import Grid from '@material-ui/core/Grid';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { RouteComponentProps } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { theme as Theme } from '../../theme';
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
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(5),
    },
    headingRow: {},
    accountHeading: {},
    logoImage: {
      marginRight: theme.spacing(2.5),
    },
    leftCaret: {
      color: theme.palette.secondary.light,
      height: '30px',
    },
  });

interface IProps extends WithStyles<typeof styles>, RouteComponentProps {}

interface IState {}

class CartHeader extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row">
          <Grid item xs={5}>
            <KeyboardArrowLeftIcon
              className={`${classes.leftCaret} pointer`}
              onClick={() => this.props.history.goBack()}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h4">My Cart</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CartHeader);
