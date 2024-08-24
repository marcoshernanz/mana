"use client";

import { useEffect, useState } from "react";
import WriteBlogPost from "./WriteBlogPost";
import BlogPost from "./BlogPost";

//Tags that user already add
export type AvailableTags = {
  tags: string[];
};

export type BlogPostType = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  isRead: boolean;
};

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const [isLoadingData, setIsLoadingData] = useState(true);

  const unreadBlogPosts = blogPosts.filter((blogPost) => !blogPost.isRead);

  const addBlogPost = (blogPost: BlogPostType) => {
    setBlogPosts((prevBlogs) => [...prevBlogs, blogPost]);
  };

  const editBlogPostIsRead = (id: number, isRead: boolean) => {
    setBlogPosts((blogPosts) => {
      const newBlogPosts = blogPosts.map((blogPost) =>
        id === blogPost.id ? { ...blogPost, isRead } : blogPost,
      );
      return newBlogPosts;
    });
  };

  useEffect(() => {
    if (isLoadingData) return;

    window.localStorage.setItem("blog-posts", JSON.stringify(blogPosts));
    window.localStorage.setItem("page-number", JSON.stringify(pageNumber));
  }, [blogPosts, isLoadingData, pageNumber]);

  useEffect(() => {
    const blogPostsData: BlogPostType[] = JSON.parse(
      window.localStorage.getItem("blog-posts") ?? "",
    );
    setBlogPosts(blogPostsData);

    const pageNumberData: number = JSON.parse(
      window.localStorage.getItem("page-number") ?? "0",
    );
    setPageNumber(pageNumberData);

    setIsLoadingData(false);
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
                <WriteBlogPost addBlogPost={addBlogPost} />
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
