interface InputProps {
  placeholder: string;
  className?: string;
}

function Input(props: InputProps) {
  const { placeholder, className } = props;
  return (
    <input
      className={"text-lg h-12 p-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 border border-gray-300 " + className}
      placeholder={placeholder}
    />
  );
}

export default Input;
