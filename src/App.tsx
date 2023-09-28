import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewForm from "./components/NewForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([] as any[]);

  function saveTodo(title: string) {
    setTodoList((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: uuidv4(),
          task: title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodoList((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodoList((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewForm onSubmit={saveTodo} />

      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
