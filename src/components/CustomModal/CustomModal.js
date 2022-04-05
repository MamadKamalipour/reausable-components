import React from "react";
import "./CustomModal.scss"
const CustomModal = () => {
  return (
  
      <div className="custom-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">امکانات اقامتگاه</h4>
          </div>
          <div className="modal-body">titles and icons</div>
          <div className="modal-footer">
            <button className="modal-button">بستن</button>
          </div>
        </div>
      </div>
    
  );
};

export default CustomModal;
