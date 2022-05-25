import "./model.css";
import { Debit } from "./debitcart";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Modal = ({ onClose }) => {
  const [data, setData] = useState(false);

  return (
    <div
      onClick={onClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: 0,
        width: "100%",
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        height: "100vh",
      }}
    >
      {data ? (
        <>
          {" "}
          <Debit />{" "}
        </>
      ) : (
        <>
          {" "}
          <div
            className="modal-box"
            style={{ width: "400px", height: "500px", background: "white" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ width: "300px" }}>
              <p
                style={{
                  fontSize: "30px",
                  paddingLeft: "15px",
                  fontWeight: "500",
                  fontFamily: "sans-serif",
                }}
              >
                Add a Payment method
              </p>
            </div>
            <div className="payment-methods" onClick={() => setData(true)}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUyf9KPIdAvI9KeDZieOxjLaagHndoKP11qA&usqp=CAU"></img>
              <p style={{ paddingLeft: "15px" }}> Credit or debit card</p>
            </div>
            <div className="line">
              <hr></hr>
            </div>
            <div className="payment-methods" onClick={() => setData(true)}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStE7IXNrSeZU44OBBVArXp5W-nuz8w8zLcOQ&usqp=CAU"></img>
              <p style={{ paddingLeft: "15px" }}>Mastercard</p>
            </div>
            <div className="line">
              <hr></hr>
            </div>
            <div className="payment-methods" onClick={() => setData(true)}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-_CwRqRx-Zk-wwrWYn28VhKZW7rVUYA6zg&usqp=CAU"></img>
              <p style={{ paddingLeft: "15px" }}> PayPal</p>
            </div>
            <div className="line">
              <hr></hr>
            </div>
            <div className="payment-methods" onClick={() => setData(true)}>
              <img src="data:image/png;base64,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"></img>
              <p style={{ paddingLeft: "15px" }}> Visa</p>
            </div>
            <div className="line">
              <hr></hr>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
