import { type Dispatch, type SetStateAction } from "react";
import { type BlogPostType } from "./page";

interface BlogPostProps {
  blogPost: BlogPostType;
  editBlogPostIsRead: (index: string, isRead: boolean) => void;
  setPageNumber: Dispatch<SetStateAction<number>>;
  pageNumber: number;
}

export default function BlogPost({
  blogPost,
  editBlogPostIsRead,
  setPageNumber,
  pageNumber,
}: BlogPostProps) {
  return (
    <div className="flex flex-col gap-8 border border-slate-300">
      <div className="flex justify-end pr-5 pt-5">
        <input
          type="checkbox"
          checked={blogPost.isRead}
          onChange={(e) => {
            const isRead = e.target.checked;
            editBlogPostIsRead(blogPost.id, isRead);
            setPageNumber((pageNumber) => pageNumber - 1);
          }}
        ></input>
      </div>
      <div className="flex gap-10">
        <div className="w-sm flex items-start gap-3 pl-5 pt-28"></div>
        <div className="flex flex-col gap-8 pb-28 pr-40">
          <div className="dark:text-slate-50">{blogPost.title}</div>
          <div className="dark:text-slate-50">{blogPost.content}</div>
          <div className="flex gap-5">
            {blogPost.tags.map((tag, index) => (
              <span key={index} className="rounded-full border px-2">
                {tag}
              </span>
            ))}
          </div>
          <div>{blogPost.author}</div>
        </div>
      </div>
      <span>{pageNumber}</span>
    </div>
  );
}
