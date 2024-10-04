interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  const { title } = props;
  return <button className="px-4 py-2 text-white bg-blue-500 rounded-lg w-[185px]">{title}</button>;
}

export default Button;
