import Input from "../custom/Input";
import Label from "../custom/Label";
import Select from "../custom/Select";
import Priority from "../../types/priorityEnum";
import DatePicker from "../custom/DatePicker";
import Button from "../custom/Button";

const CreateTodoSection = () => {
  return (
    <div className="h-full flex flex-col gap-3 justify-start items-center">
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Todo" />
        <Input placeholder="Insert your todo" className="w-full" />
      </div>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Priority" />
        <Select name="Priority" id="priority" className="w-full" options={[Priority.HIGH, Priority.MEDIUM, Priority.LOW]} />
      </div>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Data" />
        <DatePicker className="w-full" />
      </div>
      <Button title="Add Todo" className="w-96" />
    </div>
  );
};

export default CreateTodoSection;
