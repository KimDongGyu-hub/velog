import React, { useEffect, useState } from "react";

export function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 컴포넌트가 마운트될 때와 count가 변경될 때 실행됨
    console.log(`현재 카운트: ${count}`);

    // 클린업 함수 (옵션)
    return () => {
      console.log("클린업!");
    };
  }, [count]); // count가 변경될 때마다 이 효과가 실행됨

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
