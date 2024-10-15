import { useState } from "react";
import CreateTodoSection from "./components/sections/CreateTodoSection";
import Header from "./components/sections/Header";
import TodoList from "./components/sections/TodoList";
import Todo from "./types/todo";

function App() {
  const [tasksArray, setTasksArray] = useState<Todo[]>([])
  //const [taskStatus, setTaskStatus] = useState<boolean>(false);
  //const [orderedTasks, setOnChangeOrder] = useState<Todo[]>([])
  //console.log(tasksArray);

  const handleTasksListChange = (statusOfTaskChanged: boolean, creationDateOfTaskChanged: Date) => {
    const cloneArray = [...tasksArray];
    console.log("onChangeTaskStatus activated!");
    cloneArray.forEach(task => {
      if (task.creationDate === creationDateOfTaskChanged) {
        console.log("taskStatus: ", !task.done);
        task.done = !statusOfTaskChanged;
      }
    });
    setTasksArray(cloneArray)
  }

  return (
    <div className="grid grid-rows-12 h-screen">
      <Header title="Dashboard" />
      <h1 className="text-4xl text-center mt-3">Simple Todo List</h1>
      <main className="row-span-10 flex justify-between items-start w-4/6 mx-auto relative">
        <CreateTodoSection onClickAddTask={(newTask: Todo) => {
          setTasksArray([...tasksArray, newTask]);
        }} />
        <TodoList tasksArray={tasksArray}
          setTasksArray={setTasksArray}
          onChangeTaskStatus={handleTasksListChange}
        />
      </main>
    </div>
  );
}

export default App;
