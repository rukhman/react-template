import React from "react";
import { Actions } from "./Actions";
import styles from "./card.css";
import { Comments } from "./Comments";
import { Description } from "./Description";
import { Menu } from "./Menu";
import { PostInfo } from "./PostInfo";
import { Preview } from "./Preview";
import { Rating } from "./Rating";

export function Card() {
  return (
    <li className={styles.card}>
      <PostInfo />
      <Description />
      <Preview />
      <Rating />
      <Comments />
      <Actions />
      <Menu />
    </li>
  );
}
