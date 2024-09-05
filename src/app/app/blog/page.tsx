"use client";

import { use, useEffect, useState } from "react";
import WriteBlogPost from "./WriteBlogPost";
import BlogPost from "./BlogPost";
import selectAllBlogs from "@/database/queries/blog/selectAllBlogs";
import updateBlog from "@/database/queries/blog/updateBlog";

export type AvailableTags = {
  tags: string[];
};

export type BlogPostType = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  isRead: boolean;
  pageNumber: number;
};

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const [isLoadingData, setIsLoadingData] = useState(true);

  const unreadBlogPosts = blogPosts.filter((blogPost) => !blogPost.isRead);

  const fetchBlogs = async () => {
    const blogs = await selectAllBlogs();
    setBlogPosts(blogs);
  };

  const editBlogPostIsRead = async (id: string, isRead: boolean) => {
    setIsLoadingData(true);
    await updateBlog(id, { isRead });
    await fetchBlogs();
    setIsLoadingData(false);
  };

  useEffect(() => {
    (async () => {
      setIsLoadingData(true);
      await fetchBlogs();
      setIsLoadingData(false);
    })();
  }, []);

  return (
    <>
      {isLoadingData ? (
        <div className="flex h-screen w-screen items-center justify-center bg-red-600"></div>
      ) : (
        <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
          <div className="h-full w-full max-w-7xl px-10 py-28">
            <div className="flex h-full w-full justify-around text-white">
              {pageNumber > 0 && (
                <button
                  onClick={() => setPageNumber((pageNumber) => pageNumber - 1)}
                >
                  {"<"}
                </button>
              )}
              {pageNumber === 0 ? (
                <WriteBlogPost
                  pageNumber={pageNumber - 1}
                  fetchBlog={fetchBlogs}
                />
              ) : (
                unreadBlogPosts.length > 0 && (
                  <BlogPost
                    blogPost={unreadBlogPosts[pageNumber - 1]}
                    editBlogPostIsRead={editBlogPostIsRead}
                    setPageNumber={setPageNumber}
                    pageNumber={pageNumber}
                  />
                )
              )}
              {pageNumber < unreadBlogPosts.length && (
                <button
                  onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}
                >
                  {">"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
