import React from "react";
import { FiTrash } from "react-icons/fi";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalze`,
  liComplete: `flex justfy-between bg-slate-400 p-4 my-2 capitalze`,
  row: `flex`,
  text: `ml-2 cursor-pointer `,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

function Todo({ todo }) {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{todo}</p>
      </div>
        <button>
          <FiTrash />
        </button>
    </li>
  );
}

export default Todo;
