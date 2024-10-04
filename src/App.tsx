import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <>
      <Header title="Dashboard" />
      <main className="flex flex-col gap-3 justify-center items-center h-[calc(100vh-106px)]">
        <Input placeholder="Search ..." />
        <Button title="Click me" />
      </main>
    </>
  );
}

export default App;
