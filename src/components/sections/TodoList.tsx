import Todo from "../../types/todo";
import Priority from "../../types/priorityEnum";
import Select from "../custom/Select";
import TodoItem from "../custom/TodoItem";
import Label from "../custom/Label";

interface Props {
  className?: string;
}

const TodoList = (props: Props) => {
  const todoArray: Todo[] = [
    {
      id: 1,
      title: "Play with React",
      priority: Priority.HIGH,
      expireDate: new Date("2025-01-02"),
      creationDate: new Date(),
      done: false
    },
    {
      id: 2,
      title: "Play with React",
      priority: Priority.LOW,
      expireDate: new Date("2025-01-02"),
      creationDate: new Date(),
      done: false
    },
    {
      id: 3,
      title: "Play with React",
      priority: Priority.MEDIUM,
      expireDate: new Date("2025-01-02"),
      creationDate: new Date(),
      done: false
    },
    {
      id: 4,
      title: "Play with React",
      priority: Priority.LOW,
      expireDate: new Date("2025-01-02"),
      creationDate: new Date(),
      done: false
    }
  ];

  const { className } = props;

  return (
    <div className={"h-full text-center w-96 " + className}>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Order by" />
        <Select name="order-select" id="order-select" className="w-full" options={["Expire date", "Priority"]} />
      </div>
      <div className="w-full mt-8 flex flex-col space-y-7">
        {todoArray.map(todo => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
