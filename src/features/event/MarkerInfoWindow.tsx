import React, { Component } from 'react';
import MapStall from './MapStall';
import config from '../../config';
import { IMapStall } from '../../types';

// InfoWindow component
interface IInfoWindow {
  stall: typeof MapStall;
}
export const InfoWindow = (props: IInfoWindow) => {
  const { stall } = props;
  const infoWindowStyle = {
    position: 'relative',
    bottom: 0,
    left: '-45px',
    width: '275px',
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  };
  return (
    // @ts-ignore
    <MapStall stall={stall} />
  );
};

// Marker component
export const Marker = ({
  show,
  stall,
}: {
  show: boolean;
  stall: IMapStall;
}) => {
  const markerStyle = {
    zIndex: 10,
  };
  return (
    <>
      <div
        style={markerStyle}
        aria-label="marker"
        onClick={() => { }}
        onKeyDown={() => { }}
        role="button"
        tabIndex={0}
      />
      <img src="/img/MapLocation.svg" />
      {/* @ts-ignore */}
      {show && <InfoWindow stall={stall} />}
    </>
  );
};
