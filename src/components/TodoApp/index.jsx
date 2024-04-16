import { useSelector } from "react-redux";
import Form from "../Form";
import TodoItem from "../TodoItem";
import TodoTitle from "../TodoTitile";
import { useEffect, useState } from "react";

function TodoAp() {
  const todos = useSelector((state) => state.todos.todos);
  const [activeTodos, setActiveTodos] = useState([]);
  const [inactiveTodos, setInactiveTodos] = useState([]);
  const length = useSelector((state) => state.todos.todos.length);
  //   console.log(length);

  console.log(inactiveTodos.length);
  useEffect(() => {
    let active = [];
    let inactive = [];

    todos.forEach((todo) => {
      if (todo.status) {
        active.push(todo);
      } else {
        inactive.push(todo);
      }
    });

    setActiveTodos(active);
    setInactiveTodos(inactive);
  }, [todos]);

  return (
    <>
      <div className="w-[432px] mx-auto mt-40">
        <Form />
        <TodoTitle title="Tasks to do" status={false} count={length} />

        {todos.length > 0 &&
          activeTodos.map((todo, index) => {
            return (
              <TodoItem
                id={todo.id}
                key={index}
                title={todo.name}
                status={true}
              />
            );
          })}

        <TodoTitle title="Done" status={false} count={inactiveTodos.length} />

        {todos.length > 0 &&
          inactiveTodos.map((todo, index) => {
            return (
              <TodoItem
                id={todo.id}
                key={index}
                title={todo.name}
                status={false}
              />
            );
          })}
        {/* <TodoItem title="To study React fundamentals" status={false} /> */}
      </div>
    </>
  );
}

export default TodoAp;
