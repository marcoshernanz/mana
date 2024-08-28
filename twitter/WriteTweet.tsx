// "use client";

// import { useEffect, useState } from "react";
// import { TweetType } from "./Tweet";
// import { TweetReplyType } from "./TweetReply";

// interface WriteTweetProps {
//   addTweet?: (newTweet: TweetType) => void;
//   addTweetReply?: (newReply: TweetReplyType, parentTweetId: number) => void;

//   parentTweetId?: number | null;
//   onSubmit: () => void | null;
//   tweetId?: number;
// }

// export default function WriteTweet({
//   addTweet,
//   addTweetReply,
//   parentTweetId,
//   onSubmit,
//   tweetId,
// }: WriteTweetProps) {
//   const [text, setText] = useState<string>("");
//   const [author, setAuthor] = useState<string>("");
//   const [isLoadingData, setIsLoadingData] = useState(true);

//   const storageKeyPrefix = parentTweetId
//     ? `reply-${parentTweetId}`
//     : "new-tweet";

//   useEffect(() => {
//     const savedAuthor = localStorage.getItem(`${storageKeyPrefix}-author`);
//     const savedText = localStorage.getItem(`${storageKeyPrefix}-text`);

//     if (savedAuthor) setAuthor(JSON.parse(savedAuthor));
//     if (savedText) setText(JSON.parse(savedText));

//     setIsLoadingData(false);
//   }, [storageKeyPrefix]);

//   useEffect(() => {
//     if (isLoadingData) return;
//     localStorage.setItem(`${storageKeyPrefix}-author`, JSON.stringify(author));
//     localStorage.setItem(`${storageKeyPrefix}-text`, JSON.stringify(text));
//   }, [author, text, isLoadingData, storageKeyPrefix]);

//   const handleAddWriteTweet = () => {
//     if (author.trim() === "" || text.trim() === "") return;

//     if (parentTweetId !== null && parentTweetId !== undefined) {
//       const newReply: TweetReplyType = {
//         id: Math.random(),
//         author,
//         text,
//         Liked: false,
//       };
//       addTweets(newReply, parentTweetId);
//     } else {
//       const newTweet: TweetType = {
//         id: Math.random(),
//         author,
//         text,
//         replies: [],
//       };
//       addTweets(newTweet);
//     }

//     localStorage.removeItem(`${storageKeyPrefix}-author`);
//     localStorage.removeItem(`${storageKeyPrefix}-text`);
//     setText("");
//     setAuthor("");
//     onSubmit();
//   };

//   return (
//     <div className="flex items-center justify-center gap-3 rounded-lg bg-slate-800 p-3 text-slate-900 dark:text-white">
//       <div className="flex w-full flex-col items-stretch gap-3">
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="write text"
//           className="dark:text-slate-800"
//         ></input>
//         <input
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           placeholder="Author"
//           className="dark:text-slate-800"
//         ></input>
//       </div>
//       <div>
//         <button onClick={handleAddWriteTweet}>Submit</button>
//       </div>
//     </div>
//   );
// }
