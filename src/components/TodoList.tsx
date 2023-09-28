import { v4 as uuidv4 } from "uuid";
import Modal from "./Modal";
import Table from "./Table";

interface TodoProps {
  todoList: any[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

function TodoList({ todoList, toggleTodo, deleteTodo }: TodoProps) {
  const tableHeaders = ["#", "Task", "Action"];

  return (
    <Modal id="todoList" title="TODO List">
      <Table headers={tableHeaders}>
        {todoList.map((todo) => {
          return (
            <tr key={todo.id}>
              <th>
                <label>
                  <input
                    id={uuidv4()}
                    type="checkbox"
                    className="checkbox"
                    checked={todo.completed}
                    onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  />
                </label>
              </th>
              <td>{todo.task}</td>
              <th>
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          );
        })}
      </Table>
    </Modal>
  );
}

export default TodoList;
