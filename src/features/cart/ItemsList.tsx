//
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';
import get from 'lodash/get';

import {
  FindMenuItem,
  GenerateCurrencyNumber,
  CalculateLineItemTotal,
} from '../../utils';
import { HistoryType, ICart, ILineItems, IStall } from '../../types';
import { CommonP, defaultFlex } from '../../commonStyles';
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
      height: 'auto',
      width: '100%',
      filter: 'drop-shadow(0px 15px 30px rgba(0, 0, 0, 0.1))',
      borderRadius: '6px',
    },
    plusBox: {
      opacity: '0.5',
      border: '0.375px solid #263238',
      boxSizing: 'border-box',
      borderRadius: '3px',
      width: '15px',
      height: '15px',
      position: 'relative',
      background: '#FFFFFF',
      marginTop: '2px',
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
      width: '13px',
    },
    itemName: {
      paddingLeft: theme.spacing(1.25),
    },
    rootItem: {
      marginTop: '15px',
    },
    wrapper: {
      borderBottom: '1px solid #E3E3E3',
      paddingBottom: theme.spacing(2.5),
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
          <Grid item xs={2}>
            <img
              src={get(item, 'imagePaths[0]', '')}
              className={classes.itemImage}
            />
          </Grid>
          <Grid
            item
            xs={5}
            container
            direction="column"
            className={classes.itemName}
          >
            <Typography roboto={true} variant="body2">
              {item.name}
            </Typography>
          </Grid>
          <Grid item xs={2} container direction="row" justify="space-between">
            <PlusIcon />
            {lineItem.count}
            <MinusIcon />
          </Grid>
          <Grid item xs={2} justify="center" container direction="row">
            <Typography variant="body2" roboto={true}>
              {' '}
              {GenerateCurrencyNumber(CalculateLineItemTotal(cartItem))}
            </Typography>
          </Grid>
          <Grid item xs={1} className="endJustifiedFlex">
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

const Count = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #00476e;
`;

const CountWrapper = styled(defaultFlex)`
  height: 22px;
  width: 22px;
  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #00476e;
  box-sizing: border-box;
  border-radius: 4px;
`;

const ItemName = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
`;

const EditText = styled(CommonP)`
  font-family: NationalBold;
  font-size: 14px;
  line-height: 22px;
  color: #00adf6;
  cursor: pointer;
`;

const CurrencyP = styled(CommonP)`
  font-family: PlatformRegular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #444444;
`;
