import { useState } from "react";
import Input from "../custom/Input";
import Label from "../custom/Label";
import Select from "../custom/Select";
import Priority from "../../types/priorityEnum";
import DatePicker from "../custom/DatePicker";
import Button from "../custom/Button";

const CreateTodoSection = () => {
  const [value, setValue] = useState<string>("");
  const addNumber = () => {
    console.log(value);
    // console.log(date);
  };

  return (
    <div className="h-full flex flex-col gap-3 justify-start items-center">
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Todo" />
        <Input placeholder="Insert your todo" className="w-full" value={value} setValue={setValue} />
      </div>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Priority" />
        <Select name="Priority" id="priority" className="w-full" options={[Priority.HIGH, Priority.MEDIUM, Priority.LOW]} />
      </div>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Data" />
        <DatePicker className="w-full" />
      </div>
      <Button title="Add number" className="w-96" onClick={addNumber} />
      {1}
    </div>
  );
};

export default CreateTodoSection;
