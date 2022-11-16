import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import fondo from "../assets/fondo.png"

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${fondo})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <h1 style={{ color: 'white', background: 'rgb(51 181 229 / 40%)' }}>Domicilios Brioche</h1><br />
      <p style={{ color: 'white', background: 'rgb(51 181 229 / 40%)' }}>Tu Ubicación:</p><br />
      <p style={{ color: 'white', background: 'rgb(51 181 229 / 40%)' }}>Latitud: {state.latitude}</p><br />
      <p style={{ color: 'white', background: 'rgb(51 181 229 / 40%)' }}>longitud: {state.longitude}</p><br />

      <Link
        to={{
          pathname: "/map",
          // state: {
          //   hello: 'world'
          // }
          state,
        }}
        style={{ background: 'rgb(51 181 229 / 40%)' }}
      >
        Ver Marcadores
      </Link>
    </div>
  );
};

export default Home;
