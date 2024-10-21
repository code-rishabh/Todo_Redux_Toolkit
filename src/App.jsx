import AddTodo from "./assets/Components/AddTodo";
import Todos from "./assets/Components/Todos";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-neutral-700">
      <div className="container m-auto min-h-screen items-center max-w-7xl flex flex-col">
        <Header />
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
