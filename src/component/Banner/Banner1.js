import React from "react";
import ImageSlider from "../ads/Screenshow";

export const Banner1 = () => {
  return (
    <>
      <div className="banner1">
        <div className="banner1_contain">
          <div className="banner1_h2">
            <h2>Explore Timzoid's wide range of work</h2>
            <p>
              Discover Timzoid's dynamic portfolio, reshaping logistics,
              fintech, and commerce. From optimizing supply chains to
              invigorating e-commerce platforms, our projects epitomize
              innovation and measurable impact.
            </p>
          </div>

          <div className="slide_shots">
            <ImageSlider />
          </div>
        </div>
      </div>
    </>
  );
};
