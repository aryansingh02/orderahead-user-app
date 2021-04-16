import React from 'react';
import { Typography as MuiTypography, withStyles } from '@material-ui/core';

const styles = () => ({});


function Typography(props) {
  const { children, classes, roboto, variant, style, ...other } = props;

  return (
    <MuiTypography
      style={{ fontFamily: roboto ? 'Roboto' : 'GT-Walsheim', ...style }}
      // @ts-ignore
      variant={variant}
      {...other}
    >
      {children}
    </MuiTypography>
  );
}

export default withStyles(styles)(Typography);
