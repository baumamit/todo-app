import Header from "./components/sections/Header";
import Input from "./components/custom/Input";
import Label from "./components/custom/Label";
import Select from "./components/custom/Select";
import Priority from "./types/priorityEnum";
import DatePicker from "./components/custom/DatePicker";
import Button from "./components/custom/Button";

function App() {
  return (
    <div className="grid grid-rows-12 h-screen">
      <Header title="Dashboard" />
      <main className="flex flex-col gap-6 justify-center items-center row-span-11">
        <h1 className="text-4xl">Simple Todo List</h1>
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col gap-2 items-start w-96 justify-between">
            <Label title="Todo" />
            <Input placeholder="Insert your todo" className="w-full" />
          </div>
          <div className="flex flex-col gap-2 items-start w-96 justify-between">
            <Label title="Priority" />
            <Select name="Priority" id="priority" className="w-full" options={[Priority.HIGH, Priority.MEDIUM, Priority.LOW]} />
          </div>
          <div className="flex flex-col gap-2 items-start w-96 justify-between">
            <Label title="Data" />
            <DatePicker className="w-full" />
          </div>
        </div>
        <Button title="Add Todo" className="w-96" />
      </main>
    </div>
  );
}

export default App;
