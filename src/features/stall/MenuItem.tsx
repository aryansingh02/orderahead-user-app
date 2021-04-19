import React from 'react';
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import Currency from 'react-currency-formatter';
import { useHistory } from 'react-router-dom';
import { StallBanner } from './StallBanner';
import { AboutItem } from './AboutItem';
import Typography from '../../Typography';
import { AddDelete } from './AddDelete';
import Modifiers from './Modifiers';
import '../style/style.css';
import data from '../../data/options.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      overflowX: 'hidden',
    },
    aboutGrid: {
      width: '100%',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      height: '100%',
      background: 'white',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      boxShadow: 'inset 0px -1px 0px #e3e3e3',
      alignItems: 'center',
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(4),
    },
    optionsGrid: {
      marginTop: theme.spacing(5),
    },
    itemswrapperGrid: {
      height: '100%',
      width: '100%',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      background: '#F7F8FB',
    },
    priceGrid: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      marginTop: theme.spacing(2.8),
    },
    itemText: {
      width: '100%',
    },
    instructions: {
      background: '#FFFFFF',
      boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.05)',
      borderRadius: '4px',
      width: '100%',
      marginTop: theme.spacing(1),
    },
    instructheading: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    addButton: {
      borderRadius: '30px',
      marginTop: '42px',
      marginBottom: '42px',
    },
  })
);

export const MenuItem = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Grid container>
        <StallBanner
          bannerImage="/img/ItemName.png"
          callingParent="MenuItem"
          logoUrl="/img/ItemLogo.png"
          itemName="Ultimate Breakfast Wrap"
        />

        <Grid container lg={12} xs={12} sm={12} className={classes.aboutGrid}>
          <Grid item xs={10} lg={8} className={classes.itemText}>
            <AboutItem details="Free range egg, Cumberland sausage, and beechwood smoked bacon with Heinz tomato ketchup & béchamel sauce in a barmarked tortilla wrap." />
          </Grid>
          <Grid item xs={10} lg={8} className={classes.priceGrid}>
            <Typography
              variant="body1"
              component="div"
              roboto
              style={{ fontWeight: 700 }}
            >
              <Currency quantity={10.0} currency="USD" /> -{' '}
              <Currency quantity={20.0} currency="USD" />
            </Typography>
            <AddDelete />
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          lg={12}
          className={classes.itemswrapperGrid}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Grid
            container
            xs={10}
            lg={8}
            justify="center"
            direction="column"
            className={classes.optionsGrid}
          >
            {data.variations.length > 0 && (
              <Modifiers
                name="Choose"
                variations={data.variations}
                callingParent="Variations"
              />
            )}
            {data.modifier.map((modifier) => (
              <Modifiers
                name={modifier.name}
                options={modifier.options}
                key={modifier.name}
                callingParent="Modifiers"
              />
            ))}
          </Grid>
          <Grid container xs={10} lg={8} justify="center" direction="column">
            <Typography variant="h4" className={classes.instructheading}>
              Special Instructions
            </Typography>
            <Typography variant="caption">
              Add a note (e.g extra sauce, no onions ... )
            </Typography>
            <Grid className="specialInstructions">
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                className={classes.instructions}
              />
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.addButton}
              onClick={() => history.push('/stall/cart/added')}
            >
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
