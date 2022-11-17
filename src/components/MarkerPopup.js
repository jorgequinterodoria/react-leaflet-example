import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name, fecha, valor } = props.data;
  return (
    <Popup>
      <div>Fecha: {fecha}</div>
      <div>Nombre: {name}</div>
      <div>Nombre: {valor}</div>
    </Popup>
  );
};

export default MarkerPopup;
