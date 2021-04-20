import {
  createStyles,
  Divider,
  Grid,
  Hidden,
  Link,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import format from 'date-fns/format';
import StatusStepper from './StatusStepper';
import Typography from '../../Typography';
import API from '../../API';
import { IOrder, IOrderItem } from '../../types';
import { GenerateFormattedAmount } from '../../utils';

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
      overflowY: 'scroll',
    },

    namefield: {
      marginBottom: '20px',
    },
    middleGrid: {
      display: 'flex',
      flexDirection: 'column',
    },
    divider: {
      marginTop: theme.spacing(1.5),
    },
    commonStyle: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(1.9),
    },
    listitem: {
      marginBottom: theme.spacing(1.9),
    },
    collectionGrid: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(3.8),
      marginBottom: theme.spacing(6.2),
    },
  })
);

function formatPickupTime(pickupTime: string) {
  const pickupDate = new Date(pickupTime);
  return format(pickupDate, 'h:mm aa MMMM dd, yyyy');
}

function constructDetailedReceipt(order: IOrder) {
  const link = order.receiptUrl;
  return (
    <Typography
      roboto
      component="div"
      variant="subtitle1"
      color="primary"
      style={{ textAlign: 'center' }}
    >
      <Link href={link} color="inherit" target="_blank">
        Detailed receipt
      </Link>
    </Typography>
  );
}

function printVariationName(variationName: string, itemName: string): string {
  if (!variationName) {
    return '';
  }
  const replaced = variationName.replace(itemName, ' ').trim();
  if (!replaced) {
    return '';
  }
  return `, ${replaced}`;
}

function renderLineItem(lineItem: IOrderItem, listItemStyle: string) {
  return (
    <Typography
      component="div"
      variant="body1"
      roboto
      className={listItemStyle}
    >
      {lineItem.quantity} x {lineItem.name}
      {printVariationName(lineItem.selectedVariation.name, lineItem.name)}
    </Typography>
  );
}

function renderLineItems(
  lineItems: Array<IOrderItem>,
  listItemStyle: string,
  commonStyleStyle: string
) {
  return (
    <Grid item xs={12} sm={12} className={commonStyleStyle}>
      <Typography component="div" variant="h4" style={{ marginBottom: '15px' }}>
        Items
      </Typography>
      {lineItems.map((lineItem) => renderLineItem(lineItem, listItemStyle))}
    </Grid>
  );
}

export const OrderStatus = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const classes = useStyles();
  const [order, setOrder] = React.useState<IOrder | undefined>();

  React.useEffect(() => {
    // TODO: remove this as part of production rollout.
    const eOrderId = orderId || '60772c5d8021a205938af4c1';
    API.getOrder(eOrderId).then((fetchedOrder) => {
      if (fetchedOrder) {
        setOrder(fetchedOrder);
      }
    });
  }, []);

  if (!order) {
    // TODO: Create a screen for handling invalid order id case.
    return <div />;
  }
  return (
    <div className={classes.root}>
      <Grid xs={12} sm={12} lg={6} className={classes.outerGrid}>
        <Grid xs={10} sm={10} lg={10} style={{ width: '100%' }}>
          <Grid
            xs={12}
            sm={12}
            lg={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Grid item className={classes.commonStyle}>
              <Typography roboto component="div" variant="body2">
                Order # {order._id.toUpperCase()}
              </Typography>
              {constructDetailedReceipt(order)}
            </Grid>
          </Grid>
          <Grid xs={11} sm={12} lg={12} className={classes.middleGrid}>
            <Divider className={classes.divider} />
            {renderLineItems(
              order.lineItems,
              classes.listitem,
              classes.commonStyle
            )}
            <Grid item xs={12} sm={12} className={classes.commonStyle}>
              <Typography component="div" variant="h4">
                Amount Paid
              </Typography>
              <Typography
                roboto
                variant="h3"
                style={{ marginTop: '15px' }}
                color="primary"
              >
                {GenerateFormattedAmount(order.invoice.total)}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} style={{ marginTop: '30px' }}>
              <Typography component="div" variant="h4">
                Updates
              </Typography>
              <StatusStepper
                updates={order.updates}
                activeStatus={order.status}
              />
            </Grid>
            <Grid item xs={12} sm={12} className={classes.collectionGrid}>
              <Typography
                component="div"
                variant="h4"
                style={{ marginBottom: '13px' }}
              >
                Pickup Details
              </Typography>
              <Typography component="div" variant="body1" roboto>
                {formatPickupTime(order.pickupTime)}
              </Typography>
              <Typography component="div" variant="body1" roboto>
                {order.pickupLocation}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Grid lg={6}>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${'/img/status.png'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
      </Hidden>
    </div>
  );
};
