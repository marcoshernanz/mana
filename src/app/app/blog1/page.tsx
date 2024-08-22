"use client";

import { useState } from "react";
import WritePost from "./writepost2";
import BlogPost from "./blogpost2";

//Tags that user already add
export type availableTags = {
  tags: string[];
};

//gpt
export type Tags = {
  [key: string]: boolean;
};

export function Tags({ tags }: availableTags) {
  const tagsObject: Tags = {};
  tags.forEach((tag) => {
    tagsObject[tag] = false;
  });

  return tagsObject;
}

export type Blog = {
  title: string;
  content: string;
  tags: Tags;
  isRead: boolean;
  pageNumber: number;
};

export default function PageControll() {
  //change page in which you're in
  const [pageNumber, setPageNumber] = useState<number>(0);

  function SpanPage() {
    {
      // pageNumber === 0 ? <WritePost /> : <BlogPost  {
      // }/>;
    }
  }

  function Click(direction: string) {
    direction === "left"
      ? () => setPageNumber((prevPageNumber) => prevPageNumber - 1)
      : setPageNumber((prevPageNumber) => prevPageNumber + 1);

    SpanPage;
  }

  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="h-full w-full max-w-7xl px-10 py-28">
        <div className="flex h-full w-full justify-around text-white">
          <button onClick={() => Click("left")}>{"<"}</button>
          <WritePost />
          <button onClick={() => Click("right")}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
