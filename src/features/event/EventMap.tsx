import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { theme as Theme } from '../../theme';
import config from '../../config';

const styles = (theme: typeof Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headingRow: {},
    accountHeading: {},
  });

interface IProps extends WithStyles<typeof styles> {
  center: { lat: number; lng: number };
  zoom: number;
}

interface IState {}

class EventMap extends React.Component<IProps, IState> {
  public static defaultProps = {
    center: { lat: 37.7739, lng: -122.4312 },
    zoom: 14,
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: config.REACT_APP_GOOGLE_API_KEY || '' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      />
    );
  }
}

export default withStyles(styles)(EventMap);
