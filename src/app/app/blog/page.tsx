"use client";

import { use, useCallback, useEffect, useRef, useState } from "react";
import WriteBlogPost from "./WriteBlogPost";
import BlogPost from "./BlogPost";
import updateBlog from "@/database/queries/blog/updateBlog";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import SideBar from "../SideBar";
import selectBlockBlogs from "@/server-actions/blogs/selectBlockBlogs";

const numBlogsPerBlock = 20;

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
  author: string;
};

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  // const [isLoadingData, setIsLoadingData] = useState(true);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
  const [isFirstTimeLoadingBlogs, setIsFirstTimeLoadingBlogs] = useState(true);
  const numBlocksRef = useRef(0);

  const unreadBlogPosts = blogPosts.filter((blogPost) => !blogPost.isRead);

  // const fetchBlogs = async () => {
  //   const blogs = await selectAllBlogs();
  //   setBlogPosts(blogs);
  // };

  const fetchBlogs = useCallback(async () => {
    const newBlogBlock = await selectBlockBlogs({
      numBlogsPerBlock,
      blockNumber: numBlocksRef.current,
      orderBy: "date",
      descending: true,
    });

    setBlogPosts((currBlogs) => {
      const filteredBlogs = currBlogs.filter(
        (currBlog) =>
          !newBlogBlock.some((newBlogs) => newBlogs.id === currBlog.id),
      );
      return [...filteredBlogs, ...newBlogBlock];
    });
  }, []);

  const editBlogPostIsRead = async (id: string, isRead: boolean) => {
    setBlogPosts((currBlogs) =>
      currBlogs.map((blog) => (blog.id === id ? { ...blog, isRead } : blog)),
    );
    await updateBlog(id, { isRead });
  };

  // useEffect(() => {
  //   (async () => {
  //     setIsLoadingData(true);
  //     await fetchBlogs();
  //     setIsLoadingData(false);
  //   })();
  // }, []);

  useEffect(() => {
    const handleClick = () => {
      if (
        pageNumber ===
        numBlocksRef.current * numBlogsPerBlock - numBlogsPerBlock / 2
      ) {
        if (
          !isLoadingBlogs &&
          !isFirstTimeLoadingBlogs &&
          blogPosts.length === numBlogsPerBlock * numBlocksRef.current
        ) {
          setIsLoadingBlogs(true);
          numBlocksRef.current += 1;
          fetchBlogs();
          setIsLoadingBlogs(false);
        }
      }
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [
    fetchBlogs,
    isLoadingBlogs,
    blogPosts,
    isFirstTimeLoadingBlogs,
    pageNumber,
  ]);

  useEffect(() => {
    if (!isFirstTimeLoadingBlogs || numBlocksRef.current !== 0) return;

    setIsLoadingBlogs(true);
    numBlocksRef.current += 1;
    fetchBlogs();
    setIsLoadingBlogs(false);
    setIsFirstTimeLoadingBlogs(false);
  }, [fetchBlogs, isFirstTimeLoadingBlogs]);

  return (
    <div className="flex">
      <div className="relative flex w-screen flex-col items-center justify-center">
        <Image
          src="https://www.publicdomainpictures.net/pictures/230000/nahled/light-blue-background.jpg"
          alt="Photo by Drew 1"
          fill
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        {isLoadingBlogs ? (
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
                    onClick={() =>
                      setPageNumber((pageNumber) => pageNumber - 1)
                    }
                  >
                    <ChevronLeftIcon />
                  </button>
                )}
                {pageNumber === 0 ? (
                  <WriteBlogPost
                    pageNumber={pageNumber - 1}
                    setBlogs={setBlogPosts}
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
                    onClick={() =>
                      setPageNumber((pageNumber) => pageNumber + 1)
                    }
                  >
                    <ChevronRightIcon />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
