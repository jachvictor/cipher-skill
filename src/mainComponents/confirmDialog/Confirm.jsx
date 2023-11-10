import React from "react";
import { Button } from "../../components";
import "./Confirm.css";

function Confirm({ isOpen, message, onConfirm, onCancel }) {
  return (
    <>
      {isOpen && (
        <main className="hold-confirm">
          <div className="confirm-contain">
            <div className="confirm-message">{message}</div>
            <div className="hold-confirm-btn">
              <span className="yes">
                <Button className="yes" onClick={onConfirm} text={"yes"} />
              </span>
              <span className="no">
                <Button className="no" onClick={onCancel} text={"no"} />
              </span>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Confirm;
