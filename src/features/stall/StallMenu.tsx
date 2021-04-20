import React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { StallBanner } from './StallBanner';
import { StallHeader } from './StallHeader';
import { ItemsSection } from './ItemsSection';
import CategoriesScroll from '../event/CategoriesScroll';
import {
  fetchStall,
  createStallState,
  createStallLoading,
  createStallError,
} from './StallSlice';

import { CustomLoading } from '../../components/CustomLoading';
import { IItemDetail } from '../../types';
import { SomethingWrong } from '../../components/SomethingWrong';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
      overflowX: 'hidden',
    },
    navGrid: {
      marginTop: theme.spacing(1.5),
      width: '100%',
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
      marginTop: theme.spacing(6),
    },
    itemswrapperGrid: {
      height: '100%',
      width: '100%',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      background: '#F7F8FB',
      paddingBottom: theme.spacing(6.2),
    },
  })
);

// TODO : Add logic to filter items by category.

export const StallMenu = () => {
  const dispatch = useDispatch();
  const stall = useSelector(createStallState);
  const stallError = useSelector(createStallError);
  const stallLoading = useSelector(createStallLoading);
  const classes = useStyles();
  const [itemCategories, setItemCategories] = React.useState<string[]>([]);
  const [itemsByCategory, setItemsByCategory] = React.useState<IItemDetail[][]>(
    [[]]
  );
  const inputRef = React.useRef<HTMLInputElement>(null);
  const params: { stallId: string } = useParams();

  const getCategoriesObject = (categoriesArray: string[]) => {
    const newArray = categoriesArray.map((category) => ({ name: category }));
    return newArray;
  };
  React.useEffect(() => {
    dispatch(fetchStall(params.stallId));
  }, [dispatch, params.stallId]);

  React.useEffect(() => {
    const itemsArray: IItemDetail[][] = [];
    for (const item of itemCategories) {
      const perCategory =
        stall.menu &&
        stall.menu.menuItems.filter((menuItem: IItemDetail) =>
          menuItem.categories.includes(item)
        );
      itemsArray.push(perCategory);
    }
    setItemsByCategory(itemsArray);
  }, [itemCategories, stall.menu]);

  React.useEffect(() => {
    const categories = new Set<string>();
    stall &&
      stall.menu &&
      stall.menu.menuItems.map((item: IItemDetail) =>
        item.categories.map((category) => categories.add(category))
      );
    const categArray = Array.from(categories);
    setItemCategories(categArray);
  }, [stall]);

  if (stallLoading) {
    return <CustomLoading />;
  }
  if (stallError) {
    return <SomethingWrong />;
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <StallBanner
          // bannerImage="/img/CostaDesktop.png"
          bannerImage={stall.bannerImagePath}
          callingParent="StallMenu"
          stallName={stall.name}
          rating={stall.rating}
        />
        <StallHeader
          standardTime={54}
          skipLineTime={2}
          logo={stall.logoImagePath}
        />
        <Grid item xs={12} className={classes.navGrid}>
          <Paper elevation={3} className={classes.categoriesPaper}>
            <CategoriesScroll
              eventRef={inputRef}
              categories={getCategoriesObject(itemCategories)}
            />
          </Paper>
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
          {itemCategories.map((category, index) => (
            <Grid
              container
              xs={11}
              lg={8}
              justify="center"
              direction="column"
              className={classes.perItemGrid}
              key={category + Math.random}
              id={category}
            >
              <ItemsSection
                itemsArray={itemsByCategory[index]}
                categoryName={category}
                logo={stall.logoImagePath}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
