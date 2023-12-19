import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="outer">
        <div className="to-be-centered">
          <div
            className="spinner-grow text-primary"
            style={{
              width: "60rem",
              height: "60rem",
              overflow: "hidden",
              position: "absolute",
              left: "-2px",
              bottom: "-2px",
            }}
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
          <div
            className="spinner-grow text-primary"
            style={{
              width: "60rem",
              height: "60rem",
              overflow: "hidden",
              position: "absolute",
              right: "-2px",
              top: "-2px",
            }}
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
          <div
            className="spinner-grow text-primary"
            style={{
              width: "60rem",
              height: "60rem",
              overflow: "hidden",
              position: "absolute",
              left: "-2px",
              top: "-2px",
            }}
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
          <div
            className="spinner-grow text-primary"
            style={{
              width: "60rem",
              height: "60rem",
              overflow: "hidden",
              position: "absolute",
              right: "-2px",
              bottom: "-2px",
            }}
            role="status"
          >
            <span className="visually-hidden"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
