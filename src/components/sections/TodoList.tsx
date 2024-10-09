import Todo from "../../types/todo"
import Priority from "../../types/priorityEnum"
import Select from "../custom/Select"
import TodoItem  from "../custom/TodoItem"

interface Props {
    className?: string;
}

const TodoList = (props: Props) => {
    const todoArray: Todo[] = [
        {
            title: "Play with React",
            priority: Priority.HIGH,
            expireDate: new Date("2025-01-02"),
            creationDate: new Date(),
            done: false
        },
        {
            title: "Play with React",
            priority: Priority.LOW,
            expireDate: new Date("2025-01-02"),
            creationDate: new Date(),
            done: false
        },
        {
            title: "Play with React",
            priority: Priority.MEDIUM,
            expireDate: new Date("2025-01-02"),
            creationDate: new Date(),
            done: false
        },
        {
            title: "Play with React",
            priority: Priority.LOW,
            expireDate: new Date("2025-01-02"),
            creationDate: new Date(),
            done: false
        }
    ]

    const {className} = props;

    return (
        <div className={"w-[30%] text-center " + className}>
            <div className="text-4xl mt-8">Your TODOS...</div>
            <div className="flex flex-row mt-2">
                <label className="mr-2 mt-4">Order by </label>
            <Select name="order-select" id="order-select" className="mt-2" options={["Expire date", "Priority"]} />
            </div>
            <div className="mt-8 h-[60%] overflow-y-auto flex flex-col space-y-4 p-5 border-2">
                {
                    todoArray.map(todo => {
                        return <TodoItem {...todo} />
                    })
                }
            </div>
        </div>
    )
}

export default TodoList;