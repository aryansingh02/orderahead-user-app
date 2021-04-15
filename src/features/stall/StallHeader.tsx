import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import React from 'react';
import Typography from '../../Typography';

interface IProps {
  standardTime: number;
  skipLineTime: number;
  logo: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootGrid: {
      flexShrink: 1,
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      boxShadow: 'inset 0px -1px 0px #e3e3e3',
      margin: '0px 0px',
      paddingBottom: theme.spacing(1.2),
      paddingTop: theme.spacing(1.2),
      width: '100%',
      background: 'white',
    },
    headerItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap-reverse',
      textAlign: 'center',
    },

    skipLineTimeDiv: {
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
    <Grid container spacing={3} className={classes.rootGrid}>
      <Grid item xs={4} className={classes.headerItem}>
        <Typography roboto component="div" color="primary">
          Skip the Line
        </Typography>
        <Typography
          roboto
          component="div"
          color="primary"
          className={classes.skipLineTimeDiv}
        >
          {props.skipLineTime} min
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.headerItem}>
        <img src={props.logo} alt="Stall Logo" />
      </Grid>
      <Grid item xs={4} className={classes.headerItem}>
        <Typography roboto color="error" component="div">
          Standard Line{' '}
        </Typography>
        <Typography
          roboto
          component="div"
          color="error"
          className={classes.standardTimeDiv}
        >
          {props.standardTime} min
        </Typography>
      </Grid>
    </Grid>
  );
};
