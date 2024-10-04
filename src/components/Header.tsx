import Navbar from "./Navbar";

interface HeaderProps {
  title: string;
  link: string;
}

function Header(props: HeaderProps) {
  const { title, link } = props;
  console.log(link);
  return (
    <header className="flex justify-between items-center py-8 text-4xl text-gray-600 border-b-2 shadow-xl">
      <h1 className="flex-grow text-center">{title}</h1>
      <Navbar firstLink="https://www.google.com" secondLink="https://www.youtube.com" thirdLink="https://www.twitter.com" />
    </header>
  );
}

export default Header;
