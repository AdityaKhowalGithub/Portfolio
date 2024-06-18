import React, { useState, useEffect } from 'react';
import './ToastNotification.css';

const ToastNotification = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const toastElement = document.getElementById('toastNotification');
    if (show) {
      toastElement.classList.add('show');
    }
  }, [show]);

  const handleClose = () => {
    setShow(false);
  };

  return show ? (
    <div className="toast-container">
      <div id="toastNotification" className="toast">
        <div className="toast-header">
          <strong className="me-auto">New Website</strong>
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="toast-body">
          Check out my new portfolio website! <br />
          <a href="https://adityakhowalgithub.github.io/nodeWEBsite/" target="_blank" className="visit-btn" rel="noopener noreferrer">
            Visit now
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default ToastNotification;

