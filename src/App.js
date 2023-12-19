import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import "./App.css";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 3000);
  }, []);

  return (
    <>
      {load && <LandingPage />}
      {!load && <Navbar />}
    </>
  );
}

export default App;
