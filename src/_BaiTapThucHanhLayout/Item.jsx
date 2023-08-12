import React from "react";

export default function Item() {
  return (
    <>
      <div className="body_item">
        <div className="card text-center" style={{ height: "29rem" }}>
          <img
            className="card-img-top"
            src="https://duhocchaudaiduong.edu.vn/hinh-nen-doremon-ngau/imager_4566.jpg"
            alt=""
            style={{ width: "100%", height: "260px" }}
          />
          <div className="card-body">
            <h5 className="card-title fw-bold">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <hr />
            <a href="#" className="btn btn-primary">
              Find out more!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
