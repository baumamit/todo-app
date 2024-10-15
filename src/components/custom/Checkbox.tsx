
interface CheckboxProps {
  className?: string;
  taskStatus: boolean;
  onChangeCheck: (taskStatus: boolean) => void;
}

function Checkbox(props: CheckboxProps) {
  const { className, taskStatus, onChangeCheck } = props;
  return <input type="checkbox"
    className={"h-5 w-5 cursor-pointer " + className}
    checked={taskStatus}
    onChange={(event) => {
      onChangeCheck(!taskStatus)
      // console.log(event.target.checked);
    }}
  />;
}

export default Checkbox;
