import React from "react";
import { FiTrash } from "react-icons/fi";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalze`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalze`,
  row: `flex`,
  text: `ml-2 cursor-pointer `,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

function Todo({ todo , toggalComplete,deleteTodo}) {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input type="checkbox" checked={todo.completed? 'checked': ""} onChange={() => toggalComplete(todo)}/>
        <p className={todo.completed? style.textComplete: style.text}>{todo.text}</p>
      </div>
        <button onClick={()=> deleteTodo(todo)}>
          <FiTrash />
        </button>
    </li>
  );
}

export default Todo;
