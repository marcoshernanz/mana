"use client";

import { useState } from "react";
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
  //change page in which you're in
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const addBlog = (newBlog: Blog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const editBlogIsRead = (index: number, isRead: boolean) => {
    setBlogs((blog) => {
      const newBlogs = blog.map((blog, i) =>
        i === index ? { ...blog, isRead } : blog,
      );
      return newBlogs;
    });
  };

  const deleteBlog = (blogIndex: number) => {
    setBlogs((blogs) => {
      const newBlogs = blogs.filter((_, index) => index !== blogIndex);
      return newBlogs;
    });
  };

  // function SpanPage() {
  //   {
  //     // pageNumber === 0 ? <WritePost /> : <BlogPost  {
  //     // }/>;
  //   }
  // }

  // function Click(direction: string) {
  //   direction === "left"
  //     ? () => setPageNumber((prevPageNumber) => prevPageNumber - 1)
  //     : setPageNumber((prevPageNumber) => prevPageNumber + 1);

  //   SpanPage;
  // }

  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="h-full w-full max-w-7xl px-10 py-28">
        <div className="flex h-full w-full justify-around text-white">
          <button onClick={() => setPageNumber(pageNumber - 1)}>{"<"}</button>
          {pageNumber === 0 ? (
            <WritePost addBlog={addBlog} />
          ) : (
            blogs.map((blog, index) => (
              <BlogPost
                key={index}
                title={blog.title}
                content={blog.content}
                tags={blog.tags}
                availableTags={blog.tags}
                index={index}
                initialIsRead={blog.isRead}
                editBlogIsRead={editBlogIsRead}
                pageNumber={blog.pageNumber}
                deleteBlog={deleteBlog}
              />
            ))
          )}
          <button onClick={() => () => setPageNumber(pageNumber + 1)}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
