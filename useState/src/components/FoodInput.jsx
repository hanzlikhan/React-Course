import React from 'react';
import styles from './FoodInput.module.css';

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter food item here"
      className={styles.inp}
      onKeyDown={handleKeyDown} // Use the prop function directly
    />
  );
};

export default FoodInput;
