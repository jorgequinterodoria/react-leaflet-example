import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import fondo from "../assets/fondob.png"
import logo from "../assets/fondo.png"

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
    <>
      <div>
        <img src={logo} style={{ width: '400px', height: '267px' }} alt='logo' />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '60vh',
        alignItems: 'center',
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
      }}>
        <h1 >Domicilios Brioche</h1><br />
        <p >Tu Ubicación:</p><br />
        <p >Latitud: {state.latitude}</p><br />
        <p >longitud: {state.longitude}</p><br />

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
    </>
  );
};

export default Home;
