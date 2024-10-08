import {Header} from "./components/Header";
import {Input} from "./components/Input";
import {Button} from "./components/Button";
import { CreateTodoSection } from "./components/CreateTodoSection";

function App() {
  const greeting = () => {
    console.log("Hello gorgeous!");
  }
  return (
    <>
      <Header title="Todo app" link="https://delikaktus.com/" />
      <div className="flex flex-col gap-3 justify-center items-center h-[calc(100vh-158px) w-60] border-black">
        <CreateTodoSection />
      </div>
    </>
  );
}

export default App;
