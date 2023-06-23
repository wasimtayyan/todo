import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";

const style = {
  bg: `h-screen w-s p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shaow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2 `,
  form: `flex justify-between `,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2  bg-purple-600 text-slate-100`,
  count:`text-center p-2`
};
function App() {
  const [todos, setTodos] = useState(["learn react", "learn firebase "]);
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add Todo" />
          <button className={style.button}>
            {<AiOutlinePlus size={30} />}
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>{`You have ${todos.length} todos`} </p>
      </div>
    </div>
  );
}

export default App;
