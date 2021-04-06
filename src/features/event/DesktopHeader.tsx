import React from 'react';
import { fade, makeStyles, createStyles } from '@material-ui/core/styles';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Typography from '../../Typography';
import { theme as Theme } from '../../theme';

const useStyles = makeStyles((theme: typeof Theme) =>
  createStyles({
    grow: {
      width: '100%',
      position: 'fixed',
      top: 0,
      zIndex: 100
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      position: 'absolute',
      right: theme.spacing(3.75),
      top: '50%',
      transform: 'translate(0, -50%)',
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    appBarRoot: {
      background: '#FFFFFF',
      position: 'relative',
      height: '87px',
    },
    cartImg: {
      height: '23px',
      width: '23px',
    },
    magnifyImg: {
      height: '23px',
      width: '23px',
    },
    toolbarRoot: {
      height: '100%',
    },
  })
);

export default function DesktopHeader() {
  const classes = useStyles();
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBarRoot}>
        <Toolbar className={classes.toolbarRoot}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src="/img/LogoSleek.png" />
          </IconButton>
          <div className={classes.sectionDesktop}>
            <IconButton>
              <img src="/img/magnify.svg" className={classes.magnifyImg} />
            </IconButton>
            <IconButton color="inherit">
              <img src="/img/cart.svg" className={classes.cartImg} />
            </IconButton>
            <IconButton color="inherit">
              <DehazeIcon style={{ color: '#979797' }} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
