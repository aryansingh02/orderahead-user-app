import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { theme as Theme } from './theme';
import Event from './features/event/Event';

import { StallMenu } from './features/stall/StallMenu';
import AddedToCart from './features/stall/AddedToCart';
import OrderSent from './features/stall/OrderSent';

const styles = (theme: typeof Theme) =>
  createStyles({
    success: {
      backgroundColor: theme.palette.success.main,
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
    error: {
      backgroundColor: theme.palette.error.main,
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
    warning: {
      backgroundColor: theme.palette.warning.main,
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
    info: {
      backgroundColor: theme.palette.info.main,
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
  });

interface IState {}
interface IProps extends WithStyles<typeof styles> {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <SnackbarProvider
        classes={{
          variantSuccess: classes.success,
          variantError: classes.error,
          variantWarning: classes.warning,
          variantInfo: classes.info,
        }}
        maxSnack={3}
      >
        <div className="App">
          {/* @ts-ignore */}

          <Router>
            <Switch>
              <Route exact path="/event" component={Event} />
              <Route exact path="/stall/menu" component={StallMenu} />
              <Route exact path="/stall/cart/added" component={AddedToCart} />
              <Route exact path="/stall/order/sent" component={OrderSent} />
              <Route path="/" component={Event} />
            </Switch>
          </Router>
        </div>
      </SnackbarProvider>
    );
  }
}

export default withStyles(styles)(App);
