import { Label } from "./Label";
import { GoPencil } from "react-icons/go";

interface TaskProps {
    taskText: string;
    id: string;
    date: Date;
    styleTaskDiv?: string;
}

export const Task = (props: TaskProps) => {
    const { taskText, id, date, styleTaskDiv } = props;
    const dateString = date.toLocaleDateString();
    return (
        <div id={id} className={"flex flex-row text-left " + " " + styleTaskDiv}>
            <input type="checkbox" id="idCheckbox" />
            <div>
                <div>{taskText}</div>
                <div>{dateString}</div>
            </div>
            <div>
                <GoPencil />
            </div>
        </div>
    )
}