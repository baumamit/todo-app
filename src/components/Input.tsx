interface InputProps {
  placeholder: string;
}

function Input(props: InputProps) {
  const { placeholder } = props;
  return <input className="border border-gray-700 py-1 px-2 rounded-md" placeholder={placeholder} />;
}

export default Input;
