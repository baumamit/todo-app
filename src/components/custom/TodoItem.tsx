import Todo from "../../types/todo";
import Priority from "../../types/priorityEnum";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import Checkbox from "./Checkbox";

const getPillBackground = (priority: Priority): string => {
  switch (priority) {
    case Priority.HIGH:
      return "bg-red-500 text-white ";
    case Priority.MEDIUM:
      return "bg-yellow-500 text-white";
    case Priority.LOW:
      return "bg-blue-500 text-white";
  }
};

const TodoItem = (props: Todo) => {
  const { title, expireDate, priority } = props;

  return (
    <div className="shadow flex flex-row p-6 border-2 rounded-xl w-full">
      <Checkbox />
      <div className="ml-3 grow flex flex-col items-start justify-start">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="text-gray-500">{expireDate.toLocaleDateString()}</div>
      </div>
      <div>
        <div className="flex flex-row">
          <IoTrashBinOutline color="red" size={22} />
          <FaPencilAlt className="ml-2" color="gray" size={20} />
        </div>
      </div>
      <div className={"absolute w-16 py-1 px-2 mt-2 text-sm rounded-lg text-center " + getPillBackground(priority)}>{priority}</div>
    </div>
  );
};

export default TodoItem;
