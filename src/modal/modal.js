import React from 'react'
import "./modal.css";
function Modal({ onConfirm, onCancel }) {
  return (
    <div className="modall">
      <div className="modall-content">
        <p>Are you sure you want to remove this item?</p>
        <div className="modal-btns">
          <button className="btn btn-warning" onClick={onConfirm}>
            Confirm
          </button>
          <button className="btn btn-danger" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}


export default Modal;