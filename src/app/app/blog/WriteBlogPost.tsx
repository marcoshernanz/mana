"use client";

import { useEffect, useState } from "react";
import { BlogPostType } from "./page";
import { cn } from "@/lib/utils";
import insertBlogs from "@/server-actions/blogs/insertBlogs";

interface WriteBlogPost {
  pageNumber: number;
  fetchBlog: () => void;
}

export default function WriteBlogPost({
  pageNumber,
  fetchBlog,
}: WriteBlogPost) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [newTagInput, setNewTagInput] = useState<string>("");
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addTag = () => {
    if (newTagInput && !allTags.includes(newTagInput)) {
      setAllTags((prevTags) => [...prevTags, newTagInput]);
      setNewTagInput("");
    }
  };

  const handleAddBlogPost = async () => {
    if (!title || !content) return;

    const newBlog = {
      title,
      content,
      tags: selectedTags,
      pageNumber,
    };

    setTitle("");
    setContent("");
    setSelectedTags([]);
    setNewTagInput("");

    setIsLoading(true);
    await insertBlogs({
      title: newBlog.title,
      content: newBlog.content,
      tags: newBlog.tags,
      pageNumber: newBlog.pageNumber,
    });
    await fetchBlog();
    setIsLoading(false);
  };

  return (
    <div className="relative z-0 flex flex-col gap-8 rounded-lg border border-slate-300 pt-5">
      <div className="flex gap-10">
        <div className="w-sm flex items-start gap-3 pl-5 pt-28">
          <input
            value={newTagInput}
            onChange={(e) => setNewTagInput(e.target.value)}
            placeholder="Add tag"
            className="dark:text-slate-800"
          ></input>
          <button onClick={addTag}>Add</button>
        </div>
        <div className="flex flex-col gap-8 pb-28 pr-40">
          <input
            placeholder="Title"
            className="dark:text-slate-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            placeholder="Content"
            className="dark:text-slate-800"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <div className="flex gap-5">
            {allTags.map((tag, index) => (
              <button
                onClick={() =>
                  setSelectedTags((tags) => {
                    if (tags.includes(tag)) {
                      return tags.filter((tagToRemove) => tagToRemove !== tag);
                    } else {
                      return [...tags, tag];
                    }
                  })
                }
                key={index}
                className={cn(
                  "rounded-full border p-2 transition duration-300",
                  selectedTags.includes(tag) && "bg-black text-white",
                )}
              >
                <span>{selectedTags.includes(tag) ? "-" : "+"}</span>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around gap-96">
        <button
          className="flex items-end justify-end pb-5 pr-5"
          onClick={handleAddBlogPost}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
