import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { connect } from 'react-redux';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ILocation, RootState } from '../../types';
import config from '../../config';
import { getLocation } from './EventSlice';
import { AppDispatch } from '../../store';
import { event as EventData } from '../../data/testData';
import StallCard from './StallCard';
import MapStall from './MapStall';

interface IProps extends RouteComponentProps {
  width: Breakpoint;
  markerLocation: ILocation;
}

interface IState {}

class EventMap extends React.Component<IProps, IState> {
  render() {
    return (
      <div
        style={{ height: '100%', width: '100%', position: 'absolute', left: 0 }}
      >
        <GoogleMapReact
          // @ts-ignore
          bootstrapURLKeys={{ key: config.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={{
            lat: this.props.markerLocation.lat || config.SAN_FRANCISCO_LAT,
            lng: this.props.markerLocation.lng || config.SAN_FRANCISCO_LONG,
          }}
          center={{
            lat: this.props.markerLocation.lat || config.SAN_FRANCISCO_LAT,
            lng: this.props.markerLocation.lng || config.SAN_FRANCISCO_LONG,
          }}
          defaultZoom={14}
        >
          <img
            src="/img/MapLocation.svg"
            // @ts-ignore
            lat={this.props.markerLocation.lat}
            // @ts-ignore
            lng={this.props.markerLocation.lng}
          />
          {EventData.stalls.map((stall) => (
            // @ts-ignore
            <div
              style={{ width: '400px' }}
              key={stall._id}
              // @ts-ignore
              lat={stall.location.lat}
              // @ts-ignore
              lng={stall.location.lng}
            >
              <MapStall stall={stall} />
            </div>
          ))}
        </GoogleMapReact>
      </div>
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
