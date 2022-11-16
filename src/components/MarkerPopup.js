import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name, fecha } = props.data;
  return (
    <Popup>
      <div>Nombre: {name}</div>
      <div>Fecha: {fecha}</div>
    </Popup>
  );
};

export default MarkerPopup;
