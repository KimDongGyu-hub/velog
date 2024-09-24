import { useState } from "react";
import styles from "./Header.module.css";
import { Weather } from "../Weather/Weather";

export function Header({ setTranDing, tranDing, setContents, contents }) {
  const trending = "trending";
  const latest = "latest";
  const feed = "feed";

  return (
    <>
      <button
        onClick={() => {
          setContents(!contents);
        }}
      >
        {contents ? "돌아가기" : "새글작성"}
      </button>
      <button
        className={
          tranDing === trending
            ? `${styles["color"]} ${styles["active"]}`
            : styles["color"]
        }
        onClick={() => setTranDing(trending)}
      >
        트렌딩
      </button>
      <button
        className={
          tranDing === latest
            ? `${styles["color"]} ${styles["active"]}`
            : styles["color"]
        }
        onClick={() => setTranDing(latest)}
      >
        최신
      </button>
      <button
        className={
          tranDing === feed
            ? `${styles["color"]} ${styles["active"]}`
            : styles["color"]
        }
        onClick={() => setTranDing(feed)}
      >
        피드
      </button>
      <Weather />
    </>
  );
}
