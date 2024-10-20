"use client";

import { TodosType } from "@/database/schemas/todos";
import { createContext, useContext, useRef, useState } from "react";

export type OrderByType = "myOrder" | "date" | "starred";

type UndoRegisterType = {
  action: "add" | "toggleIsCompleted" | "delete" | "updateText";
  todo: TodosType;
}[];

const TodoContext = createContext<null | {
  todos: TodosType[];
  setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;

  orderBy: OrderByType;
  setOrderBy: React.Dispatch<React.SetStateAction<OrderByType>>;

  areCompletedTodosExpanded: boolean;
  setAreCompletedTodosExpanded: React.Dispatch<React.SetStateAction<boolean>>;

  replyingToTodoId: string | null;
  setReplyingToTodoId: React.Dispatch<React.SetStateAction<string | null>>;

  undoRegisterRef: React.MutableRefObject<UndoRegisterType>;
}>(null);

interface TodosProviderProps {
  children: React.ReactNode;
  initialTodos?: TodosType[];
}

export function TodoProvider({ children, initialTodos }: TodosProviderProps) {
  const [todos, setTodos] = useState<TodosType[]>(initialTodos || []);
  const [orderBy, setOrderBy] = useState<OrderByType>("myOrder");
  const [areCompletedTodosExpanded, setAreCompletedTodosExpanded] =
    useState(false);
  const [replyingToTodoId, setReplyingToTodoId] = useState<string | null>(null);

  const undoRegisterRef = useRef<UndoRegisterType>([]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,

        orderBy,
        setOrderBy,

        areCompletedTodosExpanded,
        setAreCompletedTodosExpanded,

        replyingToTodoId,
        setReplyingToTodoId,

        undoRegisterRef,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }

  return context;
}
