import React from "react";
import Banner from "./Banner";
import Item from "./Item";

export default function Body() {
  return (
    <>
      <div className="container">
        <Banner />
        <div class="container text-center pb-5">
          <div class="row row-cols-4">
            <div class="col">
              <Item />
            </div>
            <div class="col">
              <Item />
            </div>
            <div class="col">
              <Item />
            </div>
            <div class="col">
              <Item />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
