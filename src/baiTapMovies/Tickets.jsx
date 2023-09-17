import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Tickets = () => {
  const { bookedList } = useSelector((state) => state.seats);

  const dispatch = useDispatch();

  const handleRemove = (seatName) => {
    dispatch({ type: "removeSeat", seatName });
  };

  return (
    <div>
      <h1
        style={{ letterSpacing: "1px" }}
        className="text-center text-white fs-4 fw-bold pb-5"
      >
        DANH SÁCH GHẾ BẠN CHỌN
      </h1>

      <div className="mt-5 text-white">
        <div>
          <button className="check bg-warning"></button>
          <span className="fw-bold">Ghế đã đặt</span>
        </div>
        <div>
          <button className="check bg-success"></button>
          <span className="fw-bold">Ghế đang chọn</span>
        </div>
        <div>
          <button className="check bg-white"></button>
          <span className="fw-bold">Ghế chưa đặt</span>
        </div>
      </div>

      <table className="table mt-5">
        <thead>
          <tr className="text-white">
            <th>Số Ghế</th>
            <th>Giá Tiền</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody
          style={{
            color: "#ffc107",
            fontWeight: "bold",
          }}
        >
          {bookedList.map((seat, index) => {
            return (
              <tr key={index}>
                <td>{seat.name}</td>
                <td>{Number(seat.price).toLocaleString()}</td>
                <td>
                  <button
                    className="btn btn-outline-white border-0 text-danger fw-bolder"
                    onClick={() => handleRemove(seat.name)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="text-white fw-bolder">
          <tr>
            <td>Tổng Tiền:</td>
            <td colSpan={2} className="text-center">
              {bookedList
                .reduce((total, seat) => {
                  return (total += seat.price);
                }, 0)
                .toLocaleString()}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Tickets;
