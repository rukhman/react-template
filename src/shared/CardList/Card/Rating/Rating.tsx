import React from "react";
import styles from "./rating.css";

export function Rating() {
  return (
    <div className={styles.rating}>
      <button>
        <svg
          className={styles.up}
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
        </svg>
      </button>
      <span className={styles.rating_number}>101</span>
      <button>
        <svg
          className={styles.down}
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z"
            fill="#C4C4C4"
          />
        </svg>
      </button>
    </div>
  );
}
