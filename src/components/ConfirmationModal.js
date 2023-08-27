import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Are you sure you want to submit the attendance?</p>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
