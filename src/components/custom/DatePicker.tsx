interface DatePickerProps {
  className?: string;
}

const DatePicker = (props: DatePickerProps) => {
  const { className } = props;
  return (
    <input
      type="date"
      className={"text-lg h-12 p-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 border border-gray-300 " + className}
    />
  );
};

export default DatePicker;
