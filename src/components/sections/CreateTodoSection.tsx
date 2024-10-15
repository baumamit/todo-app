import { useState } from "react";
import Input from "../custom/Input";
import Label from "../custom/Label";
import Select from "../custom/Select";
import {Priority} from "../../types/priorityEnum";
import DatePicker from "../custom/DatePicker";
import Button from "../custom/Button";
import Todo from "../../types/todo";

interface CreateNewSectionProps {
  onClickAddTask: (newTask: Todo) => void;
}

const CreateTodoSection = (props: CreateNewSectionProps) => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [priority, setPriority] = useState<Priority>(Priority.HIGH);

  const onClickAddTaskButton = () => {
    const newTask: Todo = {
      creationDate: new Date(),
      done: false,
      expireDate: date,
      priority: priority,
      title: title
    }

    props.onClickAddTask(newTask)
  };

  return (
    <div className="h-full flex flex-col gap-3 justify-start items-center">
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Todo" />
        <Input placeholder="Insert your todo" className="w-full" value={title} setValue={setTitle} />
      </div>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Priority" />
        <Select
          selectedValue={priority}
          onChangeSelectedValue={setPriority}
          name="Priority" id="priority"
          className="w-full"
          options={[Priority.HIGH, Priority.MEDIUM, Priority.LOW]}
        />
      </div>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Data" />
        <DatePicker className="w-full" value={date} setValue={setDate} />
      </div>
      <Button title="Add Task" className="w-96" onClick={onClickAddTaskButton} />
    </div>
  );
};

export default CreateTodoSection;
