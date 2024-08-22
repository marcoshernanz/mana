// "use client";

// import { useState } from "react";
// import WritePost from "./writepost";
// import BlogPost from "./blogpost";

// export default function PageControll() {
//   //change page in which you're in
//   const [pageNumber, setPageNumber] = useState<number>(0);

//   function SpanPage() {
//     {
//       // pageNumber === 0 ? <WritePost /> : <BlogPost />;
//     }
//   }

//   function Click(direction: string) {
//     direction === "left"
//       ? () => setPageNumber((prevPageNumber) => prevPageNumber - 1)
//       : setPageNumber((prevPageNumber) => prevPageNumber + 1);

//     SpanPage;
//   }

//   return (
//     <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
//       <div className="h-full w-full max-w-7xl px-10 py-28">
//         <div className="flex h-full w-full justify-around text-white">
//           <button onClick={() => Click("left")}>{"<"}</button>
//           <WritePost />
//           <button onClick={() => Click("right")}>{">"}</button>
//         </div>
//       </div>
//     </div>
//   );
// }
