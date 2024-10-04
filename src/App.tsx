import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  let number = 0;
  function imcrementNumber() {
    number++;
  }
  console.log(number);
  return (
    <>
      <Header title="Dashboard" link="https://www.google.com" />
      <div className="flex justify-center items-center h-[calc(100vh-106px)]">
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg" onClick={imcrementNumber}>
          clickMe
        </button>
        <Input />
      </div>
    </>
  );
}

export default App;
