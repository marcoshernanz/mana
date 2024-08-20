"use client";

import { useState } from "react";
import WritePost from "./writepost";
import BlogPost from "./blogpost";

export default function PageControll() {
  function SpanPage() {
    {
      // pageNumber === 0 ? (
      //   <WritePost />
      // ) : (
      //   <BlogPost blogPost={blogPosts[pageNumber - 1]} />
      // );
    }
  }

  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="h-full w-full max-w-7xl px-10 py-28">
        <div className="flex h-full w-full justify-around text-white">
          <button onClick={SpanPage}>{"<"}</button>
          <WritePost />
          <button onClick={SpanPage}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
