// import { useState } from "react";
// import { Tags } from "./writepost";

// interface BlogPostProps {
//   title: string;
//   content: string;

//   tags: Tags;
//   availableTags: {};
//   index: number;
//   deleteBlog: (index: number) => void;

//   initialIsRead: boolean;
//   editBlogIsRead: (index: number, isRead: boolean) => void;

//   pageNumber: number;
// }

// export default function BlogPost({
//   title,
//   content,
//   tags,
//   availableTags,
//   index,
//   deleteBlog,
//   initialIsRead,
//   editBlogIsRead,
//   pageNumber,
// }: BlogPostProps) {
//   const [isRead, setIsRead] = useState<boolean>(initialIsRead);
//   return (
//     <div className="absolute z-10 flex flex-col gap-8 border border-orange-100">
//       <div className="flex justify-end pr-5 pt-5">
//         <input
//           type="checkbox"
//           checked={isRead}
//           onChange={(e) => {
//             const isRead = e.target.checked;
//             setIsRead(isRead);
//             editBlogIsRead(index, isRead);
//           }}
//         ></input>
//       </div>
//       <div className="flex gap-10">
//         <div className="w-sm flex items-start gap-3 pl-5 pt-28"></div>
//         <div className="flex flex-col gap-8 pb-28 pr-40">
//           <div className="dark:text-slate-800">{title}</div>
//           <div className="dark:text-slate-800">{content}</div>
//           <div className="flex gap-5">
//             {Object.entries(availableTags).map(
//               ([tag, value], index) =>
//                 tags[tag] && (
//                   <span key={index} className="rounded-full border px-2">
//                     {tag}
//                   </span>
//                 ),
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex w-full justify-around gap-96">
//         <span className="flex items-end justify-start pb-5 pr-5">
//           Page {pageNumber}
//         </span>
//         <button
//           className="flex items-end justify-end pb-5 pr-5"
//           onClick={() => deleteBlog(index)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }
