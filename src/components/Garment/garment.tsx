import React from "react";
import "./garment.css";
import bkgImg from "../../../src/assets/bkg1.jpg";
import Search from "../Search/search";
const Garment = () => {
  return (
    <>
      <div className="garmentsMainContainer">
        <img className="img" src={bkgImg} />
        <Search />
      </div>
    </>
  );
};

export default Garment;
