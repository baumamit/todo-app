import {Header} from "./components/sections/Header";
import { CreateTodoSection } from "./components/sections/CreateTodoSection";
import { TasksList } from "./components/sections/TasksList";

function App() {
  return (
    <div className="grid grid-rows-22 gap-4 justify-center">
      <Header title="Todo app" link="https://delikaktus.com/" styleHeader="" />
      <CreateTodoSection styleCreateTodoSection="flex flex-col gap-3 justify-center items-center row-span-11 w-svw border-black"/>
      <TasksList styleCreateTodoSection="flex flex-col gap-3 justify-center items-center row-span-11 w-svw border-black" />
    </div>
  );
}

export default App;
