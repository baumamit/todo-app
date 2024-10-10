import { RxDashboard as Dashboard } from "react-icons/rx";
import { TbLogin2 as Login } from "react-icons/tb";
import { FaWhatsapp as Whatsapp } from "react-icons/fa";

interface NavbarProps {
  firstLink: string;
  secondLink: string;
  thirdLink: string;
  // links: string[];
}

function Navbar(props: NavbarProps) {
  const { firstLink, secondLink, thirdLink } = props;
  function clickHandler(link: string) {
    console.log(link);
  }
  return (
    <nav className="absolute right-10 flex gap-10">
      <Dashboard className="cursor-pointer hover:text-gray-900 text-3xl" onClick={() => clickHandler(firstLink)} />
      <Login className="cursor-pointer hover:text-gray-900 text-3xl" onClick={() => clickHandler(secondLink)} />
      <Whatsapp className="cursor-pointer text-[#128c7e] hover:text-gray-900 text-3xl" onClick={() => clickHandler(thirdLink)} />
    </nav>
  );
}

export default Navbar;
