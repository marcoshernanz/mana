"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { availableTags, type Blog as BlogType, type Tags } from "./page";

interface WritePostProps {
  addBlog: (blog: BlogType) => void;
}

export default function WritePost({ addBlog }: WritePostProps) {
  const [pageNumber, setPageNumber] = useState<number>(0);
  //initial state of tags: false
  const [selectedTags, setSelectedTags] = useState<Tags>({});
  // Handle available tags that user added
  const [Addedtags, setAddedTags] = useState<availableTags>({ tags: [] });
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  //Handle user tags
  const [userTags, setUserTags] = useState<string>("");

  //need to be  here, creation of blogs
  function checkRepetition(tag: string) {
    return Addedtags.tags.includes(tag);
  }

  //need to be here, creation of blogs
  const addTags = () => {
    !(userTags === "") &&
      !checkRepetition(userTags) &&
      setAddedTags((prevTags) => ({
        tags: [...prevTags.tags, userTags],
      }));
    setUserTags("");
  };

  // can be here, creation of blogs, when submit
  const HanddleaddBlog = () => {
    const newBlog = {
      title,
      content,
      tags: selectedTags,
      isRead: false,
      pageNumber,
    };
    console.log("Adding new blog:", newBlog);
    addBlog(newBlog);
    // setBlog((prevBlogs) => [...prevBlogs, newBlog]);
    // setPageNumber((prevPageNumber) => prevPageNumber + 1);

    setTitle("");
    setContent("");
    setSelectedTags({});
  };

  return (
    <div className="relative z-0 flex flex-col gap-8 border border-orange-100">
      <div className="flex justify-end pr-5 pt-5">
        <input type="checkbox"></input>
      </div>
      <div className="flex gap-10">
        <div className="w-sm flex items-start gap-3 pl-5 pt-28">
          <input
            value={userTags}
            onChange={(e) => {
              setUserTags(e.target.value);
            }}
            placeholder="Add tag"
            className="dark:text-slate-800"
          ></input>
          <button onClick={addTags}>Add</button>
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
            {Addedtags.tags.map((tag, index) => (
              <button
                onClick={() =>
                  setSelectedTags((tags) => ({
                    ...tags,
                    [tag]: !tags[tag],
                  }))
                }
                key={index}
                className={twMerge(
                  "rounded-full border p-2 transition duration-300",
                  selectedTags[tag] && "bg-black text-white",
                )}
              >
                <span>{selectedTags[tag] ? "-" : "+"}</span>
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-around gap-96">
        <span className="flex items-start justify-start pb-5 pl-5">
          {pageNumber}
        </span>
        <button
          className="flex items-end justify-end pb-5 pr-5"
          onClick={HanddleaddBlog}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
