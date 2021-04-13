import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { theme as Theme } from '../../theme';
import { getQuery } from './EventSlice';
import { FilterStalls } from '../../utils';
import { event as Event } from '../../data/testData';
import StallCard from './StallCard';

const useStyles = makeStyles((theme: typeof Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

export default function FilteredStalls() {
  const classes = useStyles();
  const query = useSelector(getQuery);
  const filteredStalls = FilterStalls(Event.stalls, query);

  return (
    <div className={classes.root}>
      {filteredStalls.map((item) => (
        <StallCard stall={item} key={item._id} />
      ))}
    </div>
  );
}
