import React from "react";
import { Marker } from "react-leaflet";
import {
  VenueLocationIconNoviembre,
  VenueLocationIconDiciembre,
  VenueLocationIconEnero,
  VenueLocationIconFebrero,
  VenueLocationIconMarzo,
  VenueLocationIconAbril,
  VenueLocationIconMayo,
} from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

export const VenueMarkersNov = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIconNoviembre}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};

export const VenueMarkersDic = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIconDiciembre}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};
export const VenueMarkersEne = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIconEnero}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};
export const VenueMarkersFeb = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIconFebrero}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};
export const VenueMarkersMar = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIconMarzo}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};
export const VenueMarkersAbr = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIconAbril}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};
export const VenueMarkersMay = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIconMayo}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};
