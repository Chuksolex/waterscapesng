// components/ConstructionPopup.js
import React, { useState } from 'react';
import styles from './ConstructionPopUp.module.css';

const ConstructionPopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <h5>This site is undergoing reconstruction.</h5>
        <p>Some content may not be available right now.</p>
        <button onClick={handleClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

export default ConstructionPopUp;
