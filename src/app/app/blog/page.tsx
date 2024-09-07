"use client";

import { use, useEffect, useState } from "react";
import WriteBlogPost from "./WriteBlogPost";
import BlogPost from "./BlogPost";
import updateBlog from "@/database/queries/blog/updateBlog";
import selectAllBlogs from "@/server-actions/blogs/selectAllBlogs";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

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
  author?: string;
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
    <div className="relative flex w-screen flex-col items-center justify-center">
      <Image
        src="https://www.publicdomainpictures.net/pictures/230000/nahled/light-blue-background.jpg"
        alt="Photo by Drew 1"
        fill
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectFit: "cover", zIndex: 0 }}
      />
      {isLoadingData ? (
        <div className="absolute inset-0 flex h-screen w-screen items-center justify-center bg-red-600"></div>
      ) : (
        <div className="flex w-full items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center px-10 py-28">
            <div className="z-10 mb-20 flex text-3xl font-semibold text-slate-800">
              Blog
            </div>
            <div className="z-10 flex h-full w-full justify-around text-slate-900">
              {pageNumber > 0 && (
                <button
                  onClick={() => setPageNumber((pageNumber) => pageNumber - 1)}
                >
                  <ChevronLeftIcon />
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
                  <ChevronRightIcon />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
