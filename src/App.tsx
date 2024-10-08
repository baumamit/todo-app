import {Header} from "./components/sections/Header";
import { CreateTodoSection } from "./components/sections/CreateTodoSection";

function App() {
  return (
    <div className="grid grid-rows-22 gap-4 justify-center">
      <Header title="Todo app" link="https://delikaktus.com/" styleHeader="" />
      <div className="flex flex-col gap-3 justify-center items-center row-span-11 w-60 border-black">
        <CreateTodoSection />
      </div>
    </div>
  );
}

export default App;
