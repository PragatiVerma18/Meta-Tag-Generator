import React from "react";
import ReactDOM from "react-dom";

function Modal({ handleClose }) {
  return ReactDOM.createPortal(
    <div className="container box">
      <div className="block">
        <div className="modal">
          <div className="modal-background" />
          <div className="modal-content">Meta Tags</div>
          <button
            className="modal-close delete is-large"
            aria-label="close"
            onClick={handleClose}
          />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
