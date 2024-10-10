import CreateTodoSection from "./components/sections/CreateTodoSection";
import Header from "./components/sections/Header";
import TodoList from "./components/sections/TodoList";

function App() {
  return (
    <div className="grid grid-rows-12 h-screen">
      <Header title="Dashboard" />
      <h1 className="text-4xl text-center mt-3">Simple Todo List</h1>
      <main className="row-span-10 flex justify-between items-start w-4/6 mx-auto relative">
        <CreateTodoSection />
        <TodoList todoArray={[]} />
      </main>
    </div>
  );
}

export default App;
