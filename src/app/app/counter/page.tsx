"use client";

import { useState } from "react";

export default function CounterPage() {
  // const state = useState();
  // const value = state[0];
  // const setValue = state[1];
  //
  // const [value, setValue] = useState();

  const [num, setNum] = useState(0);

  function increment() {
    setNum(function (num) {
      return num + 1;
    });
  }

  return (
    <div>
      <div>{num}</div>
      <button
        onClick={function () {
          increment();
        }}
      >
        Click
      </button>
    </div>
  );
}
