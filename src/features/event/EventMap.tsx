import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { theme as Theme } from '../../theme';


interface IAny {
  text: string;
}

const AnyReactComponent = (props: IAny) => (
  <div
    style={{
      color: 'white',
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    {props.text}
  </div>
);

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
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY || '' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          text='Kreyser Avrora'
        />
      </GoogleMapReact>
    );
  }
}

export default withStyles(styles)(EventMap);