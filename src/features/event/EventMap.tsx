import { GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ILocation, IMapStall, RootState } from '../../types';
import config from '../../config';
import {
  getFilteredMapStalls,
  getFilteredStalls,
  getLocation,
} from './EventSlice';
import { AppDispatch } from '../../store';
import { event as EventData } from '../../data/testData';
import MapStall from './MapStall';
import { Marker } from './MarkerInfoWindow';

const K_MARGIN_TOP = -40;
const K_MARGIN_RIGHT = 0;
const K_MARGIN_BOTTOM = 0;
const K_MARGIN_LEFT = 0;

const K_HOVER_DISTANCE = 0;

interface IProps extends RouteComponentProps {
  width: Breakpoint;
  markerLocation: ILocation;
  filteredStalls: IMapStall[];
}

interface IState {
  mapStalls: IMapStall[];
}

class EventMap extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      mapStalls: this.props.filteredStalls,
    };
  }

  onChildClickCallback = (key: string) => {
    const newStalls = this.state.mapStalls.map((item) => {
      if (key === item._id) {
        item.active = !item.active;
      } else if (key !== item._id && item.active) {
        item.active = false;
      }
      return item;
    });
    this.setState({
      mapStalls: newStalls,
    });
  };

  render() {
    return (
      <div
        style={{ height: '100%', width: '100%', position: 'absolute', left: 0 }}
      >
        <GoogleMapReact
          // @ts-ignore
          bootstrapURLKeys={{ key: config.REACT_APP_GOOGLE_API_KEY }}
          clickableIcons={false}
          margin={[
            K_MARGIN_TOP,
            K_MARGIN_RIGHT,
            K_MARGIN_BOTTOM,
            K_MARGIN_LEFT,
          ]}
          defaultCenter={{
            lat: this.props.markerLocation.lat || config.SAN_FRANCISCO_LAT,
            lng: this.props.markerLocation.lng || config.SAN_FRANCISCO_LONG,
          }}
          center={{
            lat: this.props.markerLocation.lat || config.SAN_FRANCISCO_LAT,
            lng: this.props.markerLocation.lng || config.SAN_FRANCISCO_LONG,
          }}
          defaultZoom={14}
          onChildMouseEnter={this.onChildClickCallback}
          // onChildClick={this.onChildClickCallback}
        >
          {this.state.mapStalls.map((stall) => (
            // @ts-ignore
            <Marker
              key={stall._id}
              // @ts-ignore
              lat={stall.location.lat}
              lng={stall.location.lng}
              show={stall.active}
              stall={stall}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

const mapStateToProps = (state: RootState) => ({
  markerLocation: getLocation(state),
  filteredStalls: getFilteredMapStalls(state),
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
