import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ItemCard from './ItemCard';
import { IItemDetail } from '../../types';

interface IProps {
  itemsArray: IItemDetail[];
  categoryName: string;
  logo: string;
}

// eslint-disable-next-line arrow-body-style
export const ItemsSection = (props: IProps) => {
  const oddElements = props.itemsArray && props.itemsArray.length % 2 !== 0;
  return (
    <Grid
      container
      xs={12}
      lg={12}
      justify="space-around"
      direction="row"
      className={props.categoryName}
    >
      <Grid container xs={12} lg={11}>
        <Typography variant="h3">{props.categoryName}</Typography>
      </Grid>
      {props.itemsArray &&
        props.itemsArray.map((item) => (
          <ItemCard itemDetails={item} logo={props.logo} key={Math.random()} />
        ))}

      {oddElements && <Grid container xs={12} lg={5} justify="space-around" />}
    </Grid>
  );
};
