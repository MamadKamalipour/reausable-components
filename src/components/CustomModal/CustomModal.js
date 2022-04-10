import React from "react";
import { v4 } from "uuid";
import "./CustomModal.scss";
const CustomModal = ({ data }) => {
  return (
    <main>
      <button
        type="button"
        className="btn btn-primary modal-button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        مشاهده همه امکانات
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                امکانات اقامتگاه
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body custom-vila-modal-body">
              {data.map((option) => {
                if (option.isValid) {
                  return (
                    <div className="modal-item" key={v4()}>
                      <span>{option.title}</span>
                      <i className={option.icon}></i>
                    </div>
                  );
                }
              })}
              {data.map((option) => {
                if (!option.isValid) {
                  return (
                    <div
                      className={` modal-item ${
                        !option.isValid ? "vila-feature-isvalid" : ""
                      }`}
                      key={v4()}
                    >
                      <span>{option.title}</span>
                      <i className={option.icon}></i>
                    </div>
                  );
                }
              })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary "
                data-bs-dismiss="modal"
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomModal;
