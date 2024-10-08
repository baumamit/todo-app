import { CSSProperties } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";

interface PropsType {
    className?: string;
    style?: CSSProperties;
}

export const CreateTodoSection = (props: PropsType) => {
    const { className, style } = props;
    const nowDate = (new Date()).toLocaleDateString();

    return (
        <div>
            <h2 className="text-center font-bold text-xl">Simple To Do List</h2>
            <Input id="stuffToDo" labelText="To Do:" placeHolder="Write here what to do..." type="text" className="bg-red-200" />
            <Select />
            <Input id="expiryDateToDo" labelText="Date:" placeHolder={nowDate} type="date" className="bg-red-200" />
        </div>
    )
}