import { CSSProperties } from "react";
import { Priority } from "../../types/todo";
import { Select } from "../custom/Select";
import { Task } from "../custom/Task";

interface PropsType {
    styleCreateTodoSection?: string;
    style?: CSSProperties;
}

export const TasksList = (props: PropsType) => {
    const { styleCreateTodoSection, style } = props;
    const nowDate = (new Date()).toLocaleDateString();

    return (
        <div className={"text-center text-xl" + " " + styleCreateTodoSection}>
            <h2 className="text-center font-bold text-[3rem] my-8 w-auto">Your tasks list</h2>
            <Select id="sortBySelect" labelText="Sort by: " 
                options={["Date", "Priority"]} 
                styleDiv="my-1" styleSelect="bg-blue-200 bg-transparent" 
                styleLabel="mr-[1rem]" />
            <Task id="1" taskText="Text of the task taken from the input form" date={new Date()} />
        </div>
    )
}