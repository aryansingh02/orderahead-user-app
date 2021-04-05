import React from 'react';
import {
  createStyles,
  Grid,
  Paper,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { StallBanner } from './StallBanner';
import data from '../../data/stallMenu.json';
import { StallHeader } from './StallHeader';
import { ItemsSection } from './ItemsSection';
import categoryItems from '../../data/breadItems.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      overflowX: 'hidden',
    },
    headerGrid: {
      marginTop: '10px',
      zIndex: -1,
    },
    headerpaper: {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      boxShadow: 'inset 0px -1px 0px #e3e3e3',
    },
    navGrid: {
      height: '10vh',
      width: '100%',
      zIndex: -2,
      background: '#F7F8FB',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },
    categoriesPaper: {
      height: '100%',
      width: '100%',
      background: '#F7F8FB',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      boxShadow: 'inset 0px -1px 0px #e3e3e3',
    },
    perItemGrid: {
      marginTop: theme.spacing(6.4),
    },
    itemswrapperGrid: {
      zIndex: -3,
      height: '100%',
      width: '100%',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      background: '#F7F8FB',
      marginTop: theme.spacing(-1),
      paddingBottom: theme.spacing(6.2),
    },
  })
);

// TODO : Add logic to filter items by category.

export const StallMenu = () => {
  // eslint-disable-next-line

  const classes = useStyles();
  const [itemCategories, setItemCategories] = React.useState<string[]>([]);

  React.useEffect(() => {
    const categories = new Set<string>();
    data.menu.menuItems.map((item) =>
      item.categories.map((category) => categories.add(category))
    );
    const categArray = Array.from(categories);
    setItemCategories(categArray);
  }, []);
  return (
    <div className={classes.root}>
      <Grid container>
        <StallBanner bannerImage="" />
        <Grid item xs={12} className={classes.headerGrid}>
          <Paper elevation={2} className={classes.headerpaper}>
            <StallHeader standardTime={54} skipLineTime={2} logo="abcd" />
          </Paper>
        </Grid>
        <Grid item xs={12} className={classes.navGrid}>
          <Paper elevation={3} className={classes.categoriesPaper} />
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
            xs={11}
            lg={8}
            justify="center"
            direction="column"
            className={classes.perItemGrid}
          >
            <ItemsSection itemsArray={categoryItems.items} />
          </Grid>
          <Grid
            container
            xs={11}
            lg={8}
            justify="center"
            direction="column"
            className={classes.perItemGrid}
          >
            <ItemsSection itemsArray={categoryItems.items} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
