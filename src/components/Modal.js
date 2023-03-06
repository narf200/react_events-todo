import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ handleShowModal, children, isSalesModal }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "4px solid",
          borderColor: isSalesModal ? "#ff4500" : "#2cac51",
          textAlign: "center",
        }}
      >
        {children}
        <div></div>
      </div>
    </div>,
    document.body
  );
}
