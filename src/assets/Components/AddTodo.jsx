import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Features/TODO/TodoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 p-5 mt-10 bg-neutral-600 mx-auto rounded-xl flex items-center justify-center hover:shadow-2xl hover:shadow-black/50 transition-all duration-500"
    >
      <input
        type="text"
        className="bg-zinc-800 font-semibold rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white w-40 rounded-lg bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:shadow-2xl hover:shadow-black hover:bg-zinc-200 font-bold hover:font-black hover:text-zinc-800 transition-all duration-500 text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
