import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  GoogleAPI,
} from 'google-maps-react';
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

const style = {
  width: '100%',
  height: '100%',
};

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

interface IProps extends WithStyles<typeof styles> {
  google: GoogleAPI;
}

interface IState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectedPlace: any;
}

class EventMap extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedPlace: null,
    };
  }

  onMarkerClick = () => {
    //
  };

  onInfoWindowClose = () => {};

  render() {
    return (
      // @ts-ignore
      <Map
        google={this.props.google}
        // @ts-ignore
        zoom={14}
        style={style}
        containerStyle={containerStyle}
      >
        <Marker
          onClick={this.onMarkerClick}
          // @ts-ignore
          name="Current location"
        />
        {/* @ts-ignore */}
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            {this.state.selectedPlace && (
              <h1>{this.state.selectedPlace.name}</h1>
            )}
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  // @ts-ignore
  apiKey: config.REACT_APP_GOOGLE_API_KEY,
})(withStyles(styles)(EventMap));
