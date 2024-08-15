"use client";

import { useState } from "react";

export default function MoreItems() {
  const [num, setNum] = useState(0);

  return (
    <div className="flex items-center justify-center rounded-md border border-orange-200 bg-orange-100">
      <div className="flex py-3 pl-4 pr-6">{num}</div>
      <div className="flex flex-col">
        <div className="border-l border-orange-200 p-1 transition hover:bg-orange-200">
          <button
            onClick={function () {
              setNum(function (num) {
                return num + 1;
              });
            }}
          >
            ▲
          </button>
        </div>
        <div className="border-l border-t border-orange-200 p-1 transition hover:bg-orange-200">
          <button
            onClick={function () {
              setNum(function (num) {
                if (num === 0) {
                  return 0;
                }
                return num - 1;
              });
            }}
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
}
