import React from "react";
import "./modal.css";

export default function Modal({
  isOpen,
  children,
  onClose,
  personData,
  isEditing,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
