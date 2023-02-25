import "./Art.scss";
import { useState, useEffect } from "react";
import { artgallery } from "../../assets/artgallery";

export default function Art() {
  return (
    <div className="art" id="art">
      <h1 className="sectionTitle">Art</h1>

      <div className="lineContainer">
        <div className="hLine"></div>
      </div>

      <div className="imageGallery">
        {artgallery.map((i) => (
          // <div className="imageContainer">
          <img src={i.img} alt={i.alt} />
          // {/* <p>{i.alt}</p> */}
          // </div>
        ))}
      </div>
    </div>
  );
}
