import React, { useState, useEffect } from "react";
import { Map, TileLayer, LayersControl, LayerGroup } from "react-leaflet";
import data from "../assets/dataNov.json";
import dataDic from "../assets/dataDic.json";
import { VenueMarkersDic, VenueMarkersNov } from "./VenueMarkers";

import { useLocation, useHistory } from "react-router-dom";

import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 8.7705699, lng: -75.8652575 },
    zoom: 13,
    data,
  });
  const [stateDic, setStateDic] = useState({
    currentLocation: { lat: 8.7705699, lng: -75.8652575 },
    zoom: 13,
    dataDic,
  });

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };
      console.log("State diciembre", stateDic);
      setState({
        ...state,
        data: {
          venues: state.data.venues.concat({
            name: "Mi ubicación",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
      setStateDic({
        ...stateDic,
        dataDic: {
          venues: stateDic.dataDic.venues.concat({
            name: "Mi ubicación",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
      history.replace({
        pathname: "/map",
        state: {},
      });
    }
    // eslint-disable-next-line
  }, [location]);

  return (
    <>
      {console.log("State diciembre", stateDic)}
      <Map center={state.currentLocation} zoom={state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <LayersControl position="topright">
          <LayersControl.Overlay name="Noviembre">
            <LayerGroup>
              <VenueMarkersNov venues={state.data.venues} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Diciembre">
            <LayerGroup>
              <VenueMarkersDic venues={stateDic.dataDic.venues} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </Map>
    </>
  );
};

export default MapView;
