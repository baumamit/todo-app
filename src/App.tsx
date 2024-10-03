import { RxDashboard as Dashboard } from "react-icons/rx";
import { TbLogin2 as Login } from "react-icons/tb";
import { FaWhatsapp as Whatsapp } from "react-icons/fa";

function App() {
  return (
    <header className="bg-dark-green text-white flex justify-between items-center py-6 text-4xl">
      <div className="flex-grow text-center">Todo App</div>
      <nav className="absolute right-10 flex gap-6">
        <Dashboard className="cursor-pointer" />
        <Login className="cursor-pointer" />
        <Whatsapp className="cursor-pointer text-[#128c7e]" />
      </nav>
    </header>
  );
}

export default App;
