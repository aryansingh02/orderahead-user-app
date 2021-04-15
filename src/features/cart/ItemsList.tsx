//
import React from 'react';
import { Box, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import get from 'lodash/get';
import GenerateCurrencyNumber from '../../components/GenerateCurrencyNumber';

import { FindMenuItem, CalculateLineItemTotal, isDesktop } from '../../utils';
import { ILineItems, IStall } from '../../types';
import Typography from '../../Typography';

interface IProps {
  lineItems: ILineItems;
  stall: IStall;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    about: {
      margin: '0px 0px 16px 0px',
      textAlign: 'left',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
    },
    itemImage: {
      height: isDesktop() ? '60px' : '40px',
      width: isDesktop() ? '60px' : '40px',
      filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.1))',
      borderRadius: '6px',
    },
    plusBox: {
      border: '0.375px solid rgba(38,50,56,.16)',
      boxSizing: 'border-box',
      borderRadius: '3px',
      width: '15px',
      height: '15px',
      position: 'relative',
      background: '#FFFFFF',
      marginTop: '2px',
      padding: '1px',
    },
    addIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#979797',
    },
    deleteIcon: {
      color: '#979797',
      width: '14px',
      marginLeft: '12px',
    },
    itemName: {
      paddingLeft: theme.spacing(1.25),
      color: '#263238',
    },
    countCol: {
      width: '55px',
      justifySelf: 'flex-end',
      marginLeft: 'auto',
    },
    amountCol: {
      justifySelf: 'flex-end',
      justifyContent: 'flex-end',
    },
    deleteCol: {
      width: '20px',
      justifySelf: 'flex-end',
      textAlign: 'right',
    },
    rootItem: {
      marginBottom: '15px',
    },
    wrapper: {
      borderBottom: '1px solid #E3E3E3',
      paddingBottom: '5px',
      paddingTop: theme.spacing(2.5),
    },
  })
);

const PlusIcon = () => {
  const classes = useStyles();
  return (
    <Box className={classes.plusBox}>
      <AddIcon
        fontSize="small"
        className={classes.addIcon}
        style={{ fontSize: '14px' }}
      />
    </Box>
  );
};
const MinusIcon = () => {
  const classes = useStyles();
  return (
    <Box className={classes.plusBox}>
      <RemoveIcon
        fontSize="small"
        className={classes.addIcon}
        style={{ fontSize: '14px' }}
      />
    </Box>
  );
};

const ItemsList = (props: IProps) => {
  const itemsArr = [];
  const classes = useStyles();
  for (const lineItem of props.lineItems) {
    const { cartItem } = lineItem;
    const item = FindMenuItem(props.stall.menu, cartItem.itemId);
    if (item) {
      // @ts-ignore
      itemsArr.push(
        <Grid item container direction="row" className={classes.rootItem}>
          <Grid xs={8} item container direction="row">
            <Grid item>
              <img
                src={get(item, 'imagePaths[0]', '')}
                className={classes.itemImage}
              />
            </Grid>
            <Grid className={classes.itemName} item direction="column">
              <Typography roboto={true} variant="body2">
                {item.name}
              </Typography>
              <Typography roboto={true} variant="caption">
                standard
              </Typography>
            </Grid>
          </Grid>
          <Grid
            className={classes.countCol}
            item
            xs={2}
            container
            direction="row"
            justify="space-between"
          >
            <PlusIcon />
            {lineItem.count}
            <MinusIcon />
          </Grid>
          <Grid
            className={classes.amountCol}
            item
            xs={2}
            justify="center"
            container
            direction="row"
          >
            <Typography variant="body2" roboto={true}>
              {' '}
              <GenerateCurrencyNumber
                price={CalculateLineItemTotal(cartItem)}
              />
            </Typography>
            <DeleteIcon className={classes.deleteIcon} />
          </Grid>
        </Grid>
      );
    }
  }
  return (
    <Grid container className={classes.wrapper}>
      {itemsArr}
    </Grid>
  );
};

export default ItemsList;
