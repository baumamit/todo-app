import { IoTrashBinOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import Todo from "../../types/todo";
import Checkbox from "./Checkbox";
import Badge from "./Badge";

const TodoItem = (props: Todo) => {
  const { title, expireDate, priority } = props;

  return (
    <div className="relative shadow flex flex-row p-6 border-2 rounded-xl w-full">
      <Checkbox />
      <div className="ml-3 grow flex flex-col items-start justify-start">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="text-gray-500">{expireDate.toLocaleDateString()}</div>
      </div>
      <div className="flex flex-row">
        <IoTrashBinOutline className="cursor-pointer" color="red" size={20} />
        <FaPencilAlt className="ml-2 cursor-pointer" color="gray" size={20} />
      </div>

      <Badge priority={priority} />
    </div>
  );
};

export default TodoItem;
