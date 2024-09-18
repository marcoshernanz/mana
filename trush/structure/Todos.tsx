"use client";

import TodoItem from "./TodoItem";

interface TodosProps {
  initialData: any;
}

export default function Todos({ initialData }: TodosProps) {
  const [todos, setTodos] = useState(initialData);

  const addTodo = () => {
    // fetch("/api/......") <- POST route handler
    // setTodos......
  };

  const updateTodo = () => {
    // fetch("/api/......") <- PATCH route handler
    // setTodos......
  };

  return (
    <div>
      {/* {
      <AddTodo addTodo...... />
    } */}
      {/* {
      todos.map......
        <TodoItem updateTodo...... todo....... />
    } */}
    </div>
  );
}
