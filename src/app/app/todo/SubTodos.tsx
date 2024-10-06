// import { Button } from "@/components/ui/Button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { TodosType } from "@/database/schemas/todos";
// import { EllipsisVerticalIcon, StarIcon } from "lucide-react";
// import Menu from "./Menu";
// import { useState } from "react";
// import AddTodo from "./AddTodo";

// interface TodoItemProps {
//   todo: TodosType;
//   toggleIsCompleted: (id: string) => Promise<void>;
//   OnDelete: (id: string) => void;
//   handleStar: (id: string, isCompleted?: boolean, stared?: boolean) => void;
//   // isReplying?: boolean;
//   // addSubTask: (text: string, parentTodoId: string | null) => void;
// }

// export default function SubTodos({
//   todo,
//   toggleIsCompleted,
//   OnDelete,
//   // isReplying,
//   // addSubTask,
//   handleStar,
// }: TodoItemProps) {
//   const [stared, setStared] = useState(todo.isStared);
//   // const [replying, setReplying] = useState(isReplying);

//   const Star = () => {
//     setStared((prev) => !prev);
//     handleStar(todo.id, undefined, !stared);
//   };

//   // const handleReply = (reply: boolean) => {
//   //   setReplying(reply);
//   // };

//   return (
//     <div>
//       <div className="flex w-full flex-col rounded-lg bg-slate-50 px-6 py-4 hover:bg-slate-100/70">
//         <div className="flex w-full">
//           <div className="flex w-full items-center gap-6">
//             <Checkbox
//               checked={todo.isCompleted}
//               onCheckedChange={() => toggleIsCompleted(todo.id)}
//             />
//             {todo.isCompleted ? (
//               <div className="line-through">{todo.text}</div>
//             ) : (
//               <div className="text-slate-700">{todo.text}</div>
//             )}
//           </div>
//           <div className="flex items-start justify-end gap-2">
//             <Menu isSubTodo={true} OnDelete={OnDelete} />
//             <button onClick={Star}>
//               {stared ? (
//                 <StarIcon className="h-5 w-5 fill-yellow-300 text-yellow-400" />
//               ) : (
//                 <StarIcon className="h-5 w-5 text-slate-600" />
//               )}
//             </button>
//           </div>
//         </div>
//         <div className="max-w-xl">
//           {/* {replying
//             ? (console.log(todo.id),
//               (
//                 <AddTodo
//                   parentTodoId={todo.id}
//                   addTodo={addSubTask}
//                   handleReply={handleReply}
//                 />
//               ))
//             : null} */}
//         </div>
//       </div>
//     </div>
//   );
// }
