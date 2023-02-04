import React from "react";
import "./Banner.css";

function truncate(string, n) {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
}

function Banner() {
  return (
    <header className="banner">
      <div className="banner-contents">
        <h1 className="banner-title">Movie Name</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">
          {truncate(
            "This is a text description This is a text description This is a text description This is a text description This is a text description This is a text description This is a text description This is a text description",
            150
          )}
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
