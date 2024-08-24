"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BlogPostType } from "./page";

type WriteBlogPostType = {
  title: string;
  content: string;
  newTagInput: string;
  allTags: string[];
  selectedTags: string[];
};

interface WriteBlogPost {
  addBlogPost: (blogPost: BlogPostType) => void;
}

export default function WriteBlogPost({ addBlogPost }: WriteBlogPost) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [newTagInput, setNewTagInput] = useState<string>("");
  const [allTags, setAllTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [hasLoadedData, setHasLoadedData] = useState(false);

  const addTag = () => {
    if (newTagInput && !allTags.includes(newTagInput)) {
      setAllTags((prevTags) => [...prevTags, newTagInput]);
      setNewTagInput("");
    }
  };

  const handleAddBlogPost = () => {
    const newBlog: BlogPostType = {
      id: Math.random(),
      title,
      content,
      tags: selectedTags,
      isRead: false,
    };
    addBlogPost(newBlog);

    setTitle("");
    setContent("");
    setSelectedTags([]);
    setNewTagInput("");
  };

  useEffect(() => {
    if (!hasLoadedData) return;

    const currentBlogPostData: WriteBlogPostType = {
      title,
      content,
      newTagInput,
      allTags,
      selectedTags,
    };
    window.localStorage.setItem(
      "current-blog-post",
      JSON.stringify(currentBlogPostData),
    );
  }, [title, content, newTagInput, allTags, selectedTags, hasLoadedData]);

  useEffect(() => {
    const initialCurrentBlogPostData: WriteBlogPostType = JSON.parse(
      window.localStorage.getItem("current-blog-post") ?? "",
    );
    console.log(window.localStorage.getItem("current-blog-post") ?? "");

    setTitle(initialCurrentBlogPostData.title);
    setContent(initialCurrentBlogPostData.content);
    setNewTagInput(initialCurrentBlogPostData.newTagInput);
    setAllTags(initialCurrentBlogPostData.allTags);
    setSelectedTags(initialCurrentBlogPostData.selectedTags);

    setHasLoadedData(true);
  }, []);

  return (
    <div className="relative z-0 flex flex-col gap-8 border border-orange-100">
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
                className={twMerge(
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
