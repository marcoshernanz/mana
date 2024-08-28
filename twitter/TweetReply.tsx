// import { Heart } from "lucide-react";

// export type TweetReplyType = {
//   id: number;
//   author: string;
//   text: string;
//   Liked: boolean;
// };

// interface TweetReplyProps {
//   TweetReply: string;
//   author: string;
//   isLiked: boolean;
//   toggleLiked: () => void;
// }

// export default function TweetReply({
//   TweetReply,
//   author,
//   isLiked,
//   toggleLiked,
// }: TweetReplyProps) {
//   return (
//     <div className="flex flex-col gap-2 rounded-md border border-orange-200 bg-orange-200/30 p-2 shadow-sm hover:bg-orange-200/50 dark:border-slate-600 dark:bg-slate-700/70 dark:shadow-2xl dark:hover:bg-slate-600/60">
//       <div className="flex justify-end">
//         <button onClick={toggleLiked}>
//           {isLiked ? (
//             <Heart size="17px" color="#ff0000" strokeWidth="3px" />
//           ) : (
//             <Heart size="17px" />
//           )}
//         </button>
//       </div>
//       <span className="text-slate-700 dark:text-slate-200 dark:hover:text-slate-100">
//         {TweetReply}
//       </span>
//       <span className="text-xs text-zinc-500 dark:text-slate-200 dark:hover:text-slate-100">
//         {author}
//       </span>
//     </div>
//   );
// }
