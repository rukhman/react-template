import React from "react";
import styles from "./preview.css";

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.photo}
        src="//avatars.mds.yandex.net/i?id=4bf031466aeec8eebd5598d92cd99bda_l-3716383-images-thumbs&n=13"
        alt="photo"
      />
    </div>
  );
}
