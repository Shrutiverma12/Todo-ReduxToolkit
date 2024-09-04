import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      TodoList : <br />
      {todos.map((todoItem) => {
        return (
          <TodoItem
            id={todoItem.id}
            key={todoItem.id}
            text={todoItem.text}
            isCompleted={todoItem.completed}
          />
        );
      })}
    </div>
  );
}
export default TodoList;
