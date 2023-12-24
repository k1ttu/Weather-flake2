import React from "react";
import { useState } from "react";
import "../App.css";
import logo from './bg.png'
import { Offcanvas } from "react-bootstrap";


const Navbar = () => {
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(!isOpen)

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
      setIsOpen(false)
    } catch (e) {
      console.log(e);
    }
  };

  function updateLocation(e) {
    setLocation(e.target.value);
  }
  const heading1 = ""

  return (
    <main className=" flex flex-col align-top animate__animated animate__fadeIn animate__delay-1s">
      <nav className="flex align-middle justify-between  h-min  md:py-2  py-1 animate__animated animate__fadeInDown ">
        <img
          src={logo}
          height={70}
          width={70}
          className="m-0 p-0"
        />
        <button class='md:hidden cursor-pointer w-9 h-9 bg-none appearance-none relative' onClick={handleClose}>
          <div className="bar block h-[3px] w-full rounded-md my-1 bg-black " ></div>
          <div className="bar block h-[3px] w-full rounded-md my-1 bg-black "></div>
          <div className="bar block h-[3px] w-full rounded-md bg-black my-1 "></div>
        </button>
        <form className="my-2 items-end justify-self-end">

          <input type="text"
            value={location}
            onChange={(e) => { updateLocation(e) }}
            placeholder="Search"
            className="bg-black text-white py-1  text-base  w-1/2 border-2 border-gray-500 rounded-lg font-base"
          />
          <button onClick={gotData} className="ml-2 rounded-lg bg-none" >
            Submit
          </button>
        </form>

        <Offcanvas className="bg-transparent backdrop-blur-sm md:hidden" show={isOpen} onHide={handleClose} placement="top" >
          <Offcanvas.Header closeButton >
          </Offcanvas.Header>
          <Offcanvas.Body className='md:hidden'>

          </Offcanvas.Body>
        </Offcanvas>
      </nav>
      <div className=" items-center self-center">
        <div className="bg-transparent">
          <div className="flex flex-col align-top justify-center bg-white/30 backdrop-blur-lg w-fit rounded-2xl py-3">
            <div className="flex flex-row justify-center align-middle px-10 md:px-10">
              <h1 className="text-white mx-2 text-6xl font-bold">
                {resString.current.temp_c}&deg;C
              </h1>
              <div className="mx-2 border-l-2 px-2 h-fit ">
                <h2 className="text-white font-bold md:text-xl text-xl">
                  {resString.location.name},
                </h2>
                <h2 className="text-white font-bold md:text-xl text-xl">
                  {resString.location.country}
                </h2>
              </div>
            </div>
            <div>
              <ul>

              </ul>
            </div>
            <div>

            </div>

          </div>
        </div>
        <div className="">
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
    </main>
  );
};

export default Navbar;