import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name, fecha, costo } = props.data;
  return (
    <Popup>
      <div>Fecha: {fecha}</div>
      <div>Nombre: {name}</div>
      <div>Valor: {costo}</div>
    </Popup>
  );
};

export default MarkerPopup;
