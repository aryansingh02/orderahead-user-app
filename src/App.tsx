import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import config from 'react-global-configuration';
import { SnackbarProvider } from 'notistack';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { theme as Theme } from './theme';
import Cart from './features/cart/Cart';
import configuration from './config';
import Event from './features/event/Event';
import { StallMenu } from './features/stall/StallMenu';
import AddedToCart from './features/stall/AddedToCart';
import OrderSent from './features/stall/OrderSent';
import SearchView from './features/event/SearchView';
import MapView from './features/event/MapView';
import { OrderStatus } from './features/stall/OrderStatus';
import { OrderConfirmation } from './features/stall/OrderConfirmation';
import { MenuItem } from './features/stall/MenuItem';

config.set(configuration, { assign: false, freeze: false });

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

interface IState {
  width: number;
}
interface IProps extends WithStyles<typeof styles> {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

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
        <div
          className="App"
          // @ts-ignore
          key={this.state.width}
        >
          {/* @ts-ignore */}
          <Router>
            <Switch>
              <Route exact path="/event" component={Event} />
              <Route exact path="/search_view" component={SearchView} />
              <Route exact path="/stall/menu" component={StallMenu} />
              <Route exact path="/stall/cart/added" component={AddedToCart} />
              <Route exact path="/stall/order/sent" component={OrderSent} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/stall/order/status" component={OrderStatus} />
              <Route
                exact
                path="/stall/order/confirmation"
                component={OrderConfirmation}
              />
              <Route exact path="/map" component={MapView} />
              <Route exact path="/stall/menu/item" component={MenuItem} />
              <Route path="/" component={Event} />
            </Switch>
          </Router>
        </div>
      </SnackbarProvider>
    );
  }
}

export default withStyles(styles)(App);
