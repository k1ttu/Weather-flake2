import React from "react";
import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [location, setLocation] = useState("New Delhi");
  const [resString, setResString] = useState({
    location: {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      tz_id: "Europe/London",
      localtime_epoch: 1697898045,
      localtime: "2023-10-21 15:20",
    },
    current: {
      last_updated_epoch: 1697897700,
      last_updated: "2023-10-21 15:15",
      temp_c: 16.0,
      temp_f: 60.8,
      is_day: 1,
      condition: {
        text: "Light rain shower",
        icon: "//cdn.weatherapi.com/weather/64x64/day/353.png",
        code: 1240,
      },
      wind_mph: 3.8,
      wind_kph: 6.1,
      wind_degree: 300,
      wind_dir: "WNW",
      pressure_mb: 984.0,
      pressure_in: 29.06,
      precip_mm: 0.1,
      precip_in: 0.0,
      humidity: 82,
      cloud: 75,
      feelslike_c: 16.0,
      feelslike_f: 60.8,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 3.0,
      gust_mph: 11.9,
      gust_kph: 19.1,
      air_quality: {
        co: 237.0,
        no2: 14.1,
        o3: 63.7,
        so2: 7.5,
        pm2_5: 1.6,
        pm10: 2.3,
        "us-epa-index": 1,
        "gb-defra-index": 1,
      },
    },
  });

  const apiKey = "69cd96ec13c844d487674304232110";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  const gotData = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setResString(data);
    } catch (e) {
      console.log(e);
    }
  };

  function updateLocation(e) {
    setLocation(e.target.value);
  }

  return (
    <>
      <nav className="navbar bg-transparent">
        <div className="container-fluid bg-transparent">
          <img
            src="../WeatherFlake.png"
            alt="Logo"
            width="50"
            height="50"
            className="align-text-center bg-transparent"
          />

          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <span className="navbar-toggler-icon" style={{color: "white"}}></span>
          </button>

          <div
            className="offcanvas offcanvas-top"
            tabIndex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div className="offcanvas-header ">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{color: "white"}}
              ></button>
            </div>
            <div className="offcanvas-body ">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={updateLocation}
                />
                <label htmlFor="floatingInput">
                  search weather for your city
                </label>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={gotData}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="card-group">
        <div className="card bg-transparent">
          <div className="card-body text-center">
            <h1 className="card-title">{resString.location.name},</h1>
            <h2 style={{ color: "white" }}>{resString.location.country}</h2>
            <p className="card-text">
              latitude : {resString.location.lat}
              <br />
              longitude : {resString.location.lon}
              <br />
              timezone : {resString.location.tz_id}
              <br />
              time : {resString.location.localtime}
            </p>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="card-body">
            <h1 className="card-title text-center">
              <u>Forecast</u>
            </h1>
            <p className="card-text text-center">
              condition : {resString.current.condition.text}
              <br />
              <img src={resString.current.condition.icon} alt="error" />
            </p>
          </div>
          <div className="card-footer text-center">
            <small style={{ color: "white" }}>
              Last updated : {resString.current.last_updated}
            </small>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="card-body">
            <h1 className="card-title text-center">
              <u>Temperature</u>
            </h1>
            <p className="card-text text-center">
              Temperature : {resString.current.temp_c} C or{" "}
              {resString.current.temp_f} F <br />
              Wind Speed : {resString.current.wind_kph} Kph or{" "}
              {resString.current.wind_mph} Mph <br />
              humidity : {resString.current.humidity} <br />
              cloud : {resString.current.cloud} <br />
              UV : {resString.current.uv}
            </p>
          </div>
          <div className="card-footer text-center">
            <small style={{ color: "white" }}>
              Last updated : {resString.current.last_updated}
            </small>
          </div>
        </div>
        <div className="card bg-transparent">
          <div className="card-body">
            <h1 className="card-title text-center">
              <u>Air Quality</u>
            </h1>
            <p className="card-text text-center">
              PM(2.5) : {resString.current.air_quality.pm2_5}
              <br />
              PM(10) : {resString.current.air_quality.pm10}
              <br />
              SO2 : {resString.current.air_quality.so2}
              <br />
              O3 : {resString.current.air_quality.o3}
              <br />
              CO : {resString.current.air_quality.co}
              <br />
              NO2 : {resString.current.air_quality.no2}
              <br />
            </p>
          </div>
          <div className="card-footer text-center">
            <small style={{ color: "white" }}>
              Last updated : {resString.current.last_updated}
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
