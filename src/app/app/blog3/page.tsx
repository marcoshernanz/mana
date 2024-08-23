"use client";

import { useEffect, useState } from "react";
import WritePost from "./writepost3";
import BlogPost from "./blogpost3";

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
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (newBlog: Blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    // localStorage.setItem("blogs", JSON.stringify(newBlog));
    setPageNumber(0);
    // return newBlog;
  };

  const editBlogIsRead = (index: number, isRead: boolean) => {
    setBlogs((blog) => {
      const newBlogs = blog.map((blog, i) =>
        i === index ? { ...blog, isRead } : blog,
      );
      localStorage.setItem("blogs", JSON.stringify(newBlogs));
      return newBlogs;
    });
  };

  const deleteBlog = (blogIndex: number) => {
    setBlogs((prevBlogs) => {
      const newBlogs = prevBlogs.filter((_, index) => index !== blogIndex);
      localStorage.setItem("blogs", JSON.stringify(newBlogs));
      return newBlogs;
    });
    if (pageNumber >= blogs.length - 1) {
      setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 0));
    }
  };

  function Click(direction: string) {
    if (direction === "left" && pageNumber > 0) {
      setPageNumber((prevPageNumber) => prevPageNumber - 1);
    } else if (direction === "right" && pageNumber < blogs.length) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }

  // useEffect(() => {
  //   const blogs = JSON.parse(localStorage.getItem("blogs") ?? "[]");
  //   setBlogs(blogs);
  // }, []);

  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="h-full w-full max-w-7xl px-10 py-28">
        <div className="flex h-full w-full justify-around text-white">
          <button onClick={() => Click("left")}>{"<"}</button>
          {pageNumber === 0 ? (
            <WritePost addBlog={addBlog} pageNumber={pageNumber} />
          ) : (
            blogs.length > 0 && (
              <BlogPost
                key={pageNumber - 1}
                title={blogs[pageNumber - 1].title}
                content={blogs[pageNumber - 1].content}
                tags={blogs[pageNumber - 1].tags}
                availableTags={blogs[pageNumber - 1].tags}
                index={pageNumber - 1}
                initialIsRead={blogs[pageNumber - 1].isRead}
                editBlogIsRead={editBlogIsRead}
                pageNumber={blogs[pageNumber - 1].pageNumber}
                deleteBlog={deleteBlog}
              />
            )
          )}
          <button onClick={() => Click("right")}>{">"}</button>
        </div>
      </div>
    </div>
  );
}
