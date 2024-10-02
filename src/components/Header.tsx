import Image from "next/image";
import logo from "/public/logo.svg";
import search from "/public/search.svg";
import Link from "next/link";

export default function Header() {
  const menuItems = [
    { label: "Home", Key: "home", href: "/" },
    { label: "Sobre", Key: "sobre", href: "/" },
    { label: "Categorias", Key: "categorias", href: "/" },
    { label: "Contato", Key: "contato", href: "/" },
  ];

  return (
    <header className="bg-purple-bg w-full  max-w-[1920px]">
      <div className="w-full py-16 px-[135px]">
        <div>
          <div className="flex items-start gap-52">
            <Image className="hover:scale-125 transition-all" src={logo} alt="logo" width={161.14} height={36.54} />
            <ul className="text-white-text flex flex-row gap-8 text-lg">
              {menuItems.map((link) => (
                <Link className=" hover:font-bold" href={link.href} key={link.Key}>
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className="flex flex-row h-11">
              <input
                className="w-[230px] text-white-bg placeholder-white-bg bg-purple-input py-3.5 pl-6 rounded-l text-sm	
          text-decoration-none focus:outline-none"
                placeholder="Buscar"
                type="text"
              />
              <button
                type="button"
                className="px-[23px] py-[10px] w-[70px] rounded-r bg-purple-text hover:bg-lime"
              >
                <Image src={search} alt="busca" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
