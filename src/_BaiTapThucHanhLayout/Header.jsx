import React from "react";

export default function Header() {
  return (
    <div
      className="header container-fluid bg-dark d-flex justify-content-around"
      style={{ height: "60px" }}
    >
      <h1 className="header-title text-white fs-5 my-3">Start Bootstrap</h1>
      <div className="my-4">
        <a href="#portfolio" className="px-2 text-white text-decoration-none">
          Home
        </a>
        <a href="#about" className="px-2 text-secondary text-decoration-none">
          About
        </a>
        <a
          href="#services"
          className="px-2 text-secondary text-decoration-none"
        >
          Services
        </a>
        <a href="#contact" className="px-2 text-secondary text-decoration-none">
          Contact
        </a>
      </div>
    </div>
  );
}
