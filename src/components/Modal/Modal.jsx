import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative bg-white p-4 rounded-lg w-full max-w-md">
          <div className="flex justify-end">
            <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer" />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
