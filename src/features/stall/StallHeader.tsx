import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import logo from '../../assets/logo.png';

interface IProps {
  standardTime: number;
  skipLineTime: number;
  // eslint-disable-next-line react/no-unused-prop-types
  logo: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingRight: theme.spacing(1.2),
      paddingLeft: theme.spacing(1.2),
    },
    headerItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'red',
      flexWrap: 'wrap-reverse',
      textAlign: 'center',
    },
    skipLine: {
      color: 'blue',
    },
    skipLineTimeDiv: {
      color: 'blue',
      marginLeft: theme.spacing(0.5),
    },
    standardTimeDiv: {
      marginLeft: theme.spacing(0.5),
    },
  })
);

export const StallHeader = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} className={classes.headerItem}>
          <Typography component="div" className={classes.skipLine}>
            Skip the Line
          </Typography>
          <Typography component="div" className={classes.skipLineTimeDiv}>
            {props.skipLineTime} min
          </Typography>
        </Grid>
        <Grid item xs={4} className={classes.headerItem}>
          <img src={logo} alt="Stall Logo" />
        </Grid>
        <Grid item xs={4} className={classes.headerItem}>
          <Typography component="div">Standard Line </Typography>
          <Typography component="div" className={classes.standardTimeDiv}>
            {props.standardTime} min
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
