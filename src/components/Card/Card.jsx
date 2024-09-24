import { useState } from "react";
import styles from "./Card.module.css";

export function Card({
  title,
  content,
  author,
  createdAt,
  image,
  likes,
  comments,
  userImage,
}) {
  const postDate = new Date(createdAt);
  const curDate = Date.now();
  const diffDate = curDate - postDate;
  const day = Math.floor(diffDate / 1000 / 60 / 60 / 24);

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.text}>
        <ul>
          <li>{title}</li>
          <li>{content}</li>
          {day === 0 ? <span>오늘</span> : <span>{day}일전</span>}
          <br />
          <span>{comments}</span>
          <li>
            <img src={userImage} className={styles.userImg} alt="user" />
            by {author}
            <span>좋아요 {likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
