import React from "react";
import Shoeitem from "./Shoeitem";

export default function ShoeList({ products, onGetProduct, onOpenModal }) {
  const handleGetProduct = (product) => {
    onGetProduct(product);
  };
  return (
    <div className="row g-5 ">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-md-4 ">
            <Shoeitem
              product={product}
              onGetProduct={handleGetProduct}
              onOpenModal={onOpenModal}
            />
          </div>
        );
      })}
    </div>
  );
}
