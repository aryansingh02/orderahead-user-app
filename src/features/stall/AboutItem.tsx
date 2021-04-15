import { Grid } from '@material-ui/core';
import React from 'react';
import Typography from '../../Typography';

interface IProps {
  details: string;
}

export const AboutItem = (props: IProps) => {
  const { details } = props;
  return (
    <Grid item>
      <Typography variant="body1" roboto color="textSecondary">
        {details}
      </Typography>
    </Grid>
  );
};
