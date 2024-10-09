import Todo from "../../types/todo";
import Priority from "../../types/priorityEnum";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoTrashBinOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";

const getPillBackground = (priority: Priority): string => {
    switch (priority) {
        case Priority.HIGH:
            return "bg-red-500 text-white ";
        case Priority.MEDIUM:
            return "bg-yellow-500 text-white";
        case Priority.LOW:
            return "bg-blue-500 text-white";
    }
}

const TodoItem = (props: Todo) => {
    const { title, expireDate, priority } = props;

    return (
        <div className="shadow flex flex-row p-6 w-[80%] border-2 rounded-xl">
            <div className="w-[20%]">
                <MdCheckBoxOutlineBlank size={25} />
            </div>
            <div className="grow">
                <div>
                    {
                        title
                    }
                </div>
                <div className="text-gray-500">
                    {
                        expireDate.toLocaleDateString()
                    }
                </div>
            </div>
            <div>
                <div className="flex flex-row">
                    <IoTrashBinOutline color="red" size={22} />
                    <FaPencilAlt className="ml-2" color="gray" size={20} />
                </div>
                <div className={"p-1 mt-2 rounded-xl text-center " + getPillBackground(priority)}>
                    {
                        priority
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoItem;