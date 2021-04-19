import {
  Button,
  createStyles,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import { BackButton } from './BackButton';
import Typography from '../Typography';
import '../features/style/style.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
    },
    continueRoot: {
      paddingTop: '50px',
      paddingBottom: '50px',
    },
    bodyText: {
      marginTop: '16px',
    },
    outerGrid: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      background: '#F7F8FB',
    },
    phonefield: {
      background: 'white',
      borderRadius: '8px',
      border: '1px solid #E3E3E3',
    },
    namefield: {
      marginBottom: '20px',
    },
    middleGrid: {
      display: 'flex',
      flexDirection: 'column',
    },
    divider: {
      marginTop: theme.spacing(1.2),
      marginBottom: theme.spacing(2.4),
    },
    notificationText: {
      textTransform: 'none',
      color: 'white',
      textAlign: 'center',
    },
    notificationPaper: {
      background: theme.palette.primary.main,
      width: '100%',
      borderRadius: '0px',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 5px 10px rgba(109, 92, 255, 0.3)',
    },
  })
);

interface IProps {
  notificationMessage: JSX.Element | string;
  title: string;
  children: JSX.Element[] | JSX.Element;
  actionButtonCta: JSX.Element | string;
  ctaActionHandler: Function;
  rightBannerImage: string;
}

export const TransitionScreen = (props: IProps) => {
  const [value, setValue] = React.useState('');
  const history = useHistory();
  const classes = useStyles();
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.root}>
      <Grid xs={12} sm={12} lg={6} className={classes.outerGrid}>
        <Paper elevation={3} className={classes.notificationPaper}>
          <Typography
            roboto
            component="div"
            variant="body2"
            className={classes.notificationText}
          >
            {props.notificationMessage}
          </Typography>
        </Paper>
        <Grid xs={11} sm={11} lg={11} className={classes.middleGrid}>
          <Grid item xs={12} sm={12}>
            <BackButton header={props.title} />
            {props.children}
          </Grid>
          <Grid item xs={12} sm={12} style={{ display: 'flex' }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{
                borderRadius: '30px',
                marginTop: 'auto',
              }}
              onClick={() => props.ctaActionHandler()}
            >
              {props.actionButtonCta}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Grid lg={6}>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${props.rightBannerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
      </Hidden>
    </div>
  );
};
