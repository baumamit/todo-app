import { CSSProperties } from "react";
import { Button } from "../custom/Button";
import { Input } from "../custom/Input";
import { Select } from "../custom/Select";
import { Priority } from "../../types/todo";

interface PropsType {
    className?: string;
    style?: CSSProperties;
}

export const CreateTodoSection = (props: PropsType) => {
    const { className, style } = props;
    const nowDate = (new Date()).toLocaleDateString();

    return (
        <div className="text-center text-xl">
            <h2 className="text-center font-bold text-[3rem] my-8">Simple To Do List</h2>
            <Input id="stuffToDo" labelText="To Do:" placeHolder="Write here what to do..." type="text" 
                styleDiv="text-left my-1" styleInput="bg-red-200 flex-grow" styleLabel="mr-[2.09rem]" />
            <Select id="prioritySelect" labelText="Priority:" 
                options={[Priority.HIGH, Priority.MEDIUM, Priority.LOW]} 
                styleDiv="my-1" styleSelect="flex-grow bg-blue-200" styleLabel="mr-[1rem]" />
            <Input id="expiryDateToDo" labelText="Date:" placeHolder={nowDate} 
                type="date" styleDiv="my-1" styleInput="bg-red-200 flex-grow" styleLabel="mr-[2.5rem]" />
            <Button content="Create new task" styleButton="w-[18rem] my-3 text-center rounded-[3rem] text-[2rem] p-3 pb-4" />
        </div>
    )
}