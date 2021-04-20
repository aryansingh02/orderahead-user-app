/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Grid } from '@material-ui/core';
import { ItemCardPrice } from './ItemCardPrice';

import { IItemDetail } from '../../types';
import SleekLink from '../../components/SleekLink';

interface IProps {
  itemDetails: IItemDetail;
  logo: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      marginTop: theme.spacing(3.8),
      border: '1px solid #E3E3E3',
      borderRadius: '10px',
      '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`,
        '& h4': {
          color: theme.palette.primary.main,
        },
      },
    },
    cardElement: {
      display: 'flex',
      width: '100%',
      borderRadius: '10px',
      height: '100%',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.05)',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      '&:last-child': {
        paddingBottom: theme.spacing(1.2),
      },
      padding: theme.spacing(1.2),
    },
    cover: {
      width: '100%',
      height: '100%',
      borderRadius: '4px',
    },
    itemDescription: {
      marginTop: theme.spacing(0.4),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
    },
    itemName: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': 1,
      '-webkit-box-orient': 'vertical',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  })
);

export default function ItemCard(props: IProps) {
  const classes = useStyles();

  return (
    <Grid
      container
      xs={12}
      lg={5}
      alignItems="center"
      className={classes.cardGrid}
      justify="space-around"
    >
      <CardActionArea>
        <SleekLink to={`/stall/menu/item/${props.itemDetails._id}`}>
          <Card className={classes.cardElement}>
            <div
              style={{
                minWidth: '100px',
                maxWidth: '160px',
                padding: '10px',
                height: '100px',
              }}
            >
              <CardMedia
                className={classes.cover}
                image={
                  props && props.itemDetails && props.itemDetails.imagePaths
                    ? props.itemDetails.imagePaths[0]
                    : props.logo
                }
                title="Breakfast cover"
              />
            </div>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography
                  variant="h4"
                  component="div"
                  className={classes.itemName}
                >
                  {props.itemDetails.name}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="textSecondary"
                  className={classes.itemDescription}
                >
                  {props.itemDetails.description}
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  style={{ fontWeight: 700, marginTop: 'auto' }}
                >
                  <ItemCardPrice itemDetails={props.itemDetails} />
                </Typography>
              </CardContent>
            </div>
          </Card>
        </SleekLink>
      </CardActionArea>
    </Grid>
  );
}
