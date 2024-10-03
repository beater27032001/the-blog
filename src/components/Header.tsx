'use client'
import Image from "next/image";
import logo from "/public/logo.svg";
import search from "/public/search.svg";
import Link from "next/link";
import retangulo from "/public/rectangle.svg";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("./animation/MotionDiv"), { ssr: false });

export default function Header() {
  const menuItems = [
    { label: "Home", Key: "home", href: "/" },
    { label: "Sobre", Key: "sobre", href: "/" },
    { label: "Categorias", Key: "categorias", href: "/" },
    { label: "Contato", Key: "contato", href: "/" },
  ];

  return (
    <header className="w-full">
      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <Image
          className="hover:scale-125 transition-all"
          src={logo}
          alt="logo"
          width={161.14}
          height={36.54}
        />
        <ul className="text-white-text flex flex-row gap-8 text-lg">
          {menuItems.map((link) => (
            <div key={link.Key} className="flex gap-1">
              {link.Key === "home" && <Image src={retangulo} alt="retangulo" />}

              <Link
                className={`hover:font-bold ${
                  link.Key === "home" ? "font-bold" : ""
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </ul>
        <div className="flex flex-row h-11">
          <input
            className="w-56 text-white-bg placeholder-white-bg bg-purple-input py-3.5 pl-6 rounded-l text-sm	
          text-decoration-none focus:outline-none"
            placeholder="Buscar"
            type="text"
          />
          <button
            type="button"
            className="px-6 py-3 w-16 rounded-r bg-purple-text hover:bg-lime"
          >
            <Image src={search} alt="busca" width={24} height={24} />
          </button>
        </div>
      </MotionDiv>
    </header>
  );
}
