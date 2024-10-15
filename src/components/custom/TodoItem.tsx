import { IoTrashBinOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import Todo from "../../types/todo";
import Checkbox from "./Checkbox";
import Badge from "./Badge";
import { useState } from "react";

interface taskProps {
  task: Todo;
  // Function to call when a task item is checked or unchecked
  onChangeCheckbox: (taskStatus: boolean, creationDate: Date) => void;
}

const TodoItem = (props: taskProps) => {
  const { task, onChangeCheckbox: onChangeTaskStatus } = props;

  const [taskStatus, setTaskStatus] = useState<boolean>(false);

  return (
    <div className="relative shadow flex flex-row p-6 border-2 rounded-xl w-full">
      <Checkbox
        onChangeCheck={(taskStatus) => {
          setTaskStatus(taskStatus);
          onChangeTaskStatus(task.done, task.creationDate);
        }}
        taskStatus={taskStatus} />
      <div className="ml-3 grow flex flex-col items-start justify-start">
        <h1 className="font-bold text-xl">{task.title}</h1>
        <div className="text-gray-500">{task.expireDate.toLocaleDateString()}</div>
      </div>
      <div className="flex flex-row">
        <IoTrashBinOutline className="cursor-pointer" color="red" size={20} />
        <FaPencilAlt className="ml-2 cursor-pointer" color="gray" size={20} />
      </div>

      <Badge priority={task.priority} />
    </div>
  );
};

export default TodoItem;
