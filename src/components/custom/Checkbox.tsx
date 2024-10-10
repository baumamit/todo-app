interface CheckboxProps {
  className?: string;
}

function Checkbox(props: CheckboxProps) {
  const { className } = props;
  return <input type="checkbox" className={"h-5 w-5 " + className} />;
}

export default Checkbox;
