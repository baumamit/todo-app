import Navbar from "../custom/Navbar";
interface HeaderProps {
  title: string;
  link: string;
  styleHeader?: string;
}

export function Header(props: HeaderProps) {
  // console.log(props.title);
  const {title: altName, link:url, styleHeader} = props;
  console.log(url);
  

  return (
    <header className={"w-svw flex justify-between items-center py-8 text-4xl text-gray-600 border-b-2 shadow-xl " + styleHeader}>
      <h1 className="flex-grow text-center ">{altName}</h1>
      <Navbar links={["https://delikaktus.com/1","https://delikaktus.com/2","https://delikaktus.com/3"]}/>
    </header>
  );
}