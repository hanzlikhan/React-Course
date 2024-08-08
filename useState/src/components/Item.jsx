import React from 'react';
import styles from './Item.module.css';

function Item({ foodItem , handleBuyButtonClicked }) {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being clicked`);
  // };
  return (
    <li className={`list-group-item ${styles['kgItem']}`}>
      <span className={styles.kgSpan}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButtonClicked}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
