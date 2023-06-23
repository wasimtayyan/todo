import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-s p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shaow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2 `,
  form: `flex justify-between `,
  label: ` text-red-500 text-bold `,
  input: `border p-2 w-full text-xl`,
  inputError: `border border-red-800 p-2 w-full text-xl`,
  button: `border p-4 ml-2  bg-purple-600 text-slate-100`,
  count: `text-center p-2`,
};
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  //Create a new Todo
  const crateTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      setError(true);
      return
    }
    const newTodo = {
      text: input,
      completed: false,
    };
    await addDoc(collection(db, "todos"), newTodo);
    setInput("");
    setError(false);
  };

  //Read data from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);
  //Update data
  const toggalComplete = async (todo) => {
    const upateRef = doc(db, "todos", todo.id);
    await updateDoc(upateRef, {
      completed: !todo.completed,
    });
  };

  //Delete data from firebase collaction
  const deleteTodo = async (todo) => {
    const deltedRef = doc(db, "todos", todo.id);
    await deleteDoc(deltedRef);
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={crateTodo} className={style.form}>
          <input
            className={error ? style.inputError : style.input}
            type="text"
            placeholder="Add Todo"
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            value={input}
          />
          <button className={style.button}>
            {<AiOutlinePlus size={30} />}
          </button>
        </form>
        {error && (
          <label className={style.label}>Plaese Enter a valid todo</label>
        )}
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggalComplete={toggalComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`} </p>
        )}
      </div>
    </div>
  );
}

export default App;
