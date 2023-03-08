import "./Art.scss";
// import { useState, useEffect } from "react";
import { artgallery } from "../../assets/artgallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Art() {
  return (
    <div className="art" id="art">
      <h1 className="sectionTitle">Art</h1>

      <div className="lineContainer">
        <div className="hLine"></div>
      </div>

      <div className="gallery">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {artgallery.map((i) => (
              <div className="imageContainer">
                <img src={i.img} alt={i.alt} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
