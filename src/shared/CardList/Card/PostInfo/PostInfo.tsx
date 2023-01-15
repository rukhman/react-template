import React from "react";
import styles from "./postinfo.css";

export function PostInfo() {
  return (
    <div className={styles.postinfo}>
      <img
        className={styles.user_photo}
        src="https://cdn2.iconfinder.com/data/icons/avatars-60/5985/29-Software_Assistant-64.png"
        alt="user photo"
      />
      <span className={styles.user_name}>Константин Кодов</span>
      <span className={styles.post_time}>
        <span className={styles.visible_1024}>опубликовано</span> 8 часов назад
      </span>
    </div>
  );
}
