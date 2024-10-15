import { useState } from "react";
import Todo from "../../types/todo";
import { SortKeys } from "../../types/sortKeysEnum";
import Select from "../custom/Select";
import TodoItem from "../custom/TodoItem";
import Label from "../custom/Label";
import { valueOfPriority } from "../../types/priorityEnum";

interface TodoListProps {
  className?: string;
  tasksArray: Todo[];
  setTasksArray: React.Dispatch<React.SetStateAction<Todo[]>>;
  // Function to call when a task item is checked or unchecked
  onChangeTaskStatus: (taskStatus: boolean, creationDate: Date) => void;
}

const TodoList = (props: TodoListProps) => {
  const { className, tasksArray, setTasksArray, onChangeTaskStatus } = props;
  const [sortKey, setSortKey] = useState<SortKeys>(SortKeys.EXPIRY_DATE_ASCENDING);

  const sortedArray = (sortByKey: SortKeys): Todo[] => {

    return [...tasksArray].sort(
      (task1: Todo, task2: Todo): number => {
        let taskA = 0;
        let taskB = 0;

        switch (sortByKey) {
          case SortKeys.EXPIRY_DATE_ASCENDING: {
            taskA = task1.expireDate.getTime();
            taskB = task2.expireDate.getTime();
            break;
          }
          case SortKeys.EXPIRY_DATE_DESCENDING: {
            taskB = task1.expireDate.getTime();
            taskA = task2.expireDate.getTime();
            break;
          }
          case SortKeys.PRIORITY_DESCENDING: {
            taskB = valueOfPriority(task1.priority);
            taskA = valueOfPriority(task2.priority);
            break;
          }
          case SortKeys.PRIORITY_ASCENDING: {
            taskA = valueOfPriority(task1.priority);
            taskB = valueOfPriority(task2.priority);
            break;
          }
        }

        return taskA - taskB
      }
    )
  }

  setTasksArray(tasksArray);

  const sortOptions = [SortKeys.EXPIRY_DATE_ASCENDING, SortKeys.EXPIRY_DATE_DESCENDING, SortKeys.PRIORITY_DESCENDING, SortKeys.PRIORITY_ASCENDING];

  return (
    <div className={"h-full text-center w-96 " + className}>
      <div className="flex flex-col gap-2 items-start w-96 justify-between">
        <Label title="Order by" />

        <Select
          selectedValue={sortKey}
          onChangeSelectedValue={setSortKey}
          name="order-select"
          id="order-select"
          className="w-full"
          options={sortOptions}
        />
      </div>

      <Label title="To be completed" />
      <div className="w-full mt-8 flex flex-col space-y-7">
        {sortedArray(sortKey)
          .filter((task) => { return task.done === false })
          .map(task => {
            return <TodoItem key={task.creationDate.toISOString()}
              task={task}
              onChangeCheckbox={onChangeTaskStatus}
            />;
          })}
      </div>

      <Label title="Completed" />
      <div className="w-full mt-8 flex flex-col space-y-7">
        {sortedArray(sortKey)
          .filter((task) => { return task.done === true })
          .map(task => {
            return <TodoItem key={task.creationDate.toISOString()}
              task={task}
              onChangeCheckbox={onChangeTaskStatus}
            />;
          })}
      </div>
    </div>
  );
};

export default TodoList;
