"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Blog from "./blog";

//Tags that user already add
export type availableTags = {
  tags: string[];
};

//gpt
type Tags = {
  [key: string]: boolean;
};

//
function Tags({ tags }: availableTags) {
  const tagsObject: Tags = {};
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  tags.forEach((tag) => {
    tagsObject[tag] = false;
  });

  return tagsObject;
}

type Blog = {
  title: string;
  content: string;
  tags: Tags;
  isRead: boolean;
};

export default function BlogPage() {
  //initial state of tags: false
  const [selectedTags, setSelectedTags] = useState<Tags>({});

  const [blog, setBlog] = useState<Blog[]>([]);

  // Handle available tags that user added
  const [Addedtags, setAddedTags] = useState<availableTags>({ tags: [] });

  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  //Handle user tags
  const [userTags, setUserTags] = useState<string>("");

  function checkRepetition(tag: string) {
    return Addedtags.tags.includes(tag);
  }

  const addTags = () => {
    !(userTags === "") &&
      !checkRepetition(userTags) &&
      setAddedTags((prevTags) => ({
        tags: [...prevTags.tags, userTags],
      }));
    setUserTags("");
  };

  const addBlog = () => {
    const newBlog = { title, content, tags: selectedTags, isRead: false };
    console.log("Adding new blog:", newBlog);
    setBlog((prevBlogs) => [...prevBlogs, newBlog]);

    setTitle("");
    setContent("");
    setSelectedTags({});
  };

  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="h-full w-full max-w-7xl px-10 py-28">
        <div className="flex h-full w-full justify-around text-white">
          <button>{"<"}</button>
          <div className="flex flex-col gap-8 border border-orange-100">
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
            <button
              className="flex items-end justify-end pb-5 pr-5"
              onClick={addBlog}
            >
              Submit
            </button>
          </div>
          <button
            onClick={() => {
              {
                blog.map((blog, index) => (
                  <Blog
                    key={index}
                    title={blog.title}
                    tags={blog.tags}
                    // deleteTask={deleteTask}
                    index={index}
                    // initialIsCompleted={blog.isRead}
                    // editTaskIsCompleted={editBlogIsRead}
                  />
                ));
              }
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
