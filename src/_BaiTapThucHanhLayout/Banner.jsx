import React from "react";

export default function Banner() {
  return (
    <div
      className="banner text-center bg-secondary-subtle rounded"
      style={{ padding: "3rem", margin: "3rem 0" }}
    >
      <h1 className="text-dark fw-bold">A Warm Welcome!</h1>
      <p className="text-body-secondary fs-5 fw-bold text-dark">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        officia iste quasi minima voluptatum saepe dolor, similique sapiente
        recusandae expedita libero dolorum ad error fugit dolore odit veritatis
        enim! Fugiat.
      </p>
      <button className="btn btn-primary fs-5">Call to action</button>
    </div>
  );
}
