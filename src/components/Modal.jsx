import React from 'react';

export default function Modal({ isOpen, onClose, theme, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-content modal-theme-${theme}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
