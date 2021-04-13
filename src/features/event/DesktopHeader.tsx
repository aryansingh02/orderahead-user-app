import React, { useEffect, useRef, useReducer } from 'react';
import { fade, makeStyles, createStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AppBar from '@material-ui/core/AppBar';
import get from 'lodash/get';
import { Box } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Typography from '../../Typography';
import { theme as Theme } from '../../theme';
import RecentSearches from './RecentSearches';
import { getQuery, setQuery } from './EventSlice';

const useStyles = makeStyles((theme: typeof Theme) =>
  createStyles({
    grow: {
      width: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    inputRoot: {
      color: 'inherit',
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
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
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
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      color: '#000000',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    recentSearchBox: {
      position: 'absolute',
      width: '350px',
      height: 'auto',
      background: '#fff',
      color: '#000000',
      padding: '5px',
    },
  })
);

export default function DesktopHeader() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [inputFocused, setInputFocused] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const dispatch = useDispatch();
  const searchQuery = useSelector(getQuery);

  function handleClick() {
    forceUpdate();
    console.log(inputRef.current!.getBoundingClientRect().left);
    console.log(inputRef.current!.getBoundingClientRect().top);
  }

  useEffect(() => {
    handleClick();
  }, [inputRef]);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              </div>
            </IconButton>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onClick={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              inputProps={{ 'aria-label': 'search' }}
              inputRef={inputRef}
              value={searchQuery}
              onChange={(evt) => dispatch(setQuery(evt.target.value))}
            />
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
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          {inputFocused && inputRef.current && (
            <Box
              className={classes.recentSearchBox}
              style={{
                left: inputRef.current.getBoundingClientRect().left || 0,
                top: inputRef.current.getBoundingClientRect().top + 50 || 0,
              }}
            >
              <RecentSearches query={searchQuery} />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
