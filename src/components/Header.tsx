"use client";
import Image from "next/image";
import logo from "/public/logo.svg";
import search from "/public/search.svg";
import Link from "next/link";
import retangulo from "/public/rectangle.svg";
import dynamic from "next/dynamic";
import { useState } from "react";

// Importação dinâmica do componente MotionDiv para animações
const MotionDiv = dynamic(() => import("./animation/MotionDiv"), {
  ssr: false,
});

export default function Header() {
  // Estado para controlar a visibilidade do menu hambúguer
  const [menuOpen, setMenuOpen] = useState(false);

  // Intes do menu
  const menuItems = [
    { label: "Home", Key: "home", href: "/" },
    { label: "Sobre", Key: "sobre", href: "/" },
    { label: "Categorias", Key: "categorias", href: "/" },
    { label: "Contato", Key: "contato", href: "/" },
  ];

  return (
    <header className="w-full relative z-50">
      <div className="flex flex-col">
        <MotionDiv
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex cel:gap-8 mobile:flex-row mobile:justify-between cel:flex-col items-center "
        >
          {/* Logo */}
          <Image
            className="cel:scale-150 mobile:scale-100 mobile:hover:scale-125 transition-all"
            src={logo}
            alt="logo"
            width={161.14}
            height={36.54}
          />

          {/* Menu de navegação para telas maiores */}
          <ul className="hidden desktop:flex text-white-text flex-row gap-8 text-lg">
            {menuItems.map((link) => (
              <div key={link.Key} className="flex gap-1">
                {link.Key === "home" && (
                  <Image src={retangulo} alt="retangulo" />
                )}
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

          {/* Input de busca */}
          <div className="h-11 flex flex-row cel:scale-75 mobile:scale-100">
            <input
              className="w-56 text-white-bg placeholder-white-bg bg-purple-input py-3.5 pl-6 rounded-l text-sm text-decoration-none focus:outline-none"
              placeholder="Buscar"
              type="text"
            />
            <button
              type="button"
              className="px-6 py-3 w-16 rounded-r bg-purple-text hover:bg-purple-800"
            >
              <Image src={search} alt="busca" width={24} height={24} />
            </button>
          </div>

          {/* Menu hambúrguer para telas menores */}
          <div className="desktop:hidden flex items-center relative">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center text-white-text"
              >
                <span className="mr-2">Menu</span>
                <Image src={search} alt="menu" width={24} height={24} />
              </button>
            

            {/* Menu dropdown */}
            {menuOpen && (
              <MotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute mt-4 w-48 bg-purple-700 rounded-md shadow-lg z-50"
                style={{ top: '100%' }} 
              >
                {menuItems.map((link) => (
                  <div key={link.Key} className="flex gap-1 py-2 px-4">
                    {link.Key === "home" && (
                      <Image src={retangulo} alt="retangulo" />
                    )}
                    <Link
                      className={`text-white-text hover:font-bold ${
                        link.Key === "home" ? "font-bold" : ""
                      }`}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </MotionDiv>
            )}
          </div>
        </MotionDiv>
      </div>
    </header>
  );
}
