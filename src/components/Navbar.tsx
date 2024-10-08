import { RxDashboard as Dashboard } from "react-icons/rx";
import { TbLogin2 as Login } from "react-icons/tb";
import { FaWhatsapp as Whatsapp } from "react-icons/fa";

interface navbarProps {
    links: string[]
}

export default function Navbar(props: navbarProps) {
    console.log(props);
    const links = props.links
    const handleClick = (i: number) => {
        console.log(links[i]);
    }
    return (
        <nav className="absolute right-10 flex gap-10">
            <Dashboard className="cursor-pointer hover:text-orange-300" onClick={() => handleClick(0)} />
            <Login className="cursor-pointer hover:text-orange-300" onClick={() => handleClick(1)} />
            <Whatsapp className="cursor-pointer text-[green] hover:text-orange-300" onClick={() => handleClick(2)} />
        </nav>
    );
}