interface ButtonProps {
  title: string;
  className?: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const { title, className, onClick } = props;

  return (
    <button className={"px-4 py-2 text-gray-50 bg-blue-500 rounded-lg text-lg hover:bg-blue-600 " + className} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
