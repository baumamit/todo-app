import Priority from "./priorityEnum";

/*
 * Represents a TODO in this application
 */
interface Todo {
  id: number;
  title: string;
  expireDate: Date;
  done: boolean;
  creationDate: Date;
  priority: Priority;
}

export default Todo;
