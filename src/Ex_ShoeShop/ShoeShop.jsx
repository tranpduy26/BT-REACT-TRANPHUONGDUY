import React, { useState } from "react";
import ShoeList from "./ShoeList";
import data from "./data.json";
import Modal from "./Modal";

export default function ShoeShop() {
  // state quản lý giá trị sẩn phẩm được chọn
  const [selectedProduct, setSelectedProduct] = useState(null);

  // state quản lý trạng thái ẩn/hiện của modal Detail
  const [isOpen, setIsOpen] = useState(false);

  const handleGetProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="container">
      <h1 className="text-center text-primary my-4">SHOE SHOP</h1>
      <ShoeList
        products={data}
        onGetProduct={handleGetProduct}
        onOpenModal={handleOpenModal}
      />
      {isOpen && (
        <Modal product={selectedProduct} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
}
