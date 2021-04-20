import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { connect } from 'react-redux';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ILocation, RootState } from '../../types';
import config from '../../config';
import { getLocation } from './EventSlice';
import { AppDispatch } from '../../store';

interface IProps extends RouteComponentProps {
  width: Breakpoint;
  markerLocation: ILocation;
}

interface IState {}

class EventMap extends React.Component<IProps, IState> {
  render() {
    return (
      // @ts-ignore
      <Map
        // @ts-ignore
        google={this.props.google}
        // @ts-ignore
        zoom={14}
        containerStyle={{ width: '100%', height: '100%', position: 'static' }}
        style={{ width: '100%', height: '100%' }}
        mapTypeControl={false}
        zoomControl={false}
        scaleControl={false}
        streetViewControl={false}
        fullscreenControl={false}
        initialCenter={{
          lat: this.props.markerLocation.lat || config.SAN_FRANCISCO_LAT,
          lng: this.props.markerLocation.lng || config.SAN_FRANCISCO_LONG,
        }}
        center={{
          lat: this.props.markerLocation.lat || config.SAN_FRANCISCO_LAT,
          lng: this.props.markerLocation.lng || config.SAN_FRANCISCO_LONG,
        }}
      >
        {/* @ts-ignore */}
        {this.props.markerLocation.lat && this.props.markerLocation.lng && (
          // @ts-ignore
          <Marker
            // @ts-ignore
            name="Selected Location"
            // @ts-ignore
            position={{
              lat: this.props.markerLocation.lat,
              lng: this.props.markerLocation.lng,
            }}
          />
        )}
      </Map>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

const mapStateToProps = (state: RootState) => ({
  markerLocation: getLocation(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    // @ts-ignore
    apiKey: config.REACT_APP_GOOGLE_API_KEY,
    // @ts-ignore
  })(EventMap)
);
