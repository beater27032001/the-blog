"use client";
import Image from "next/image";
import Link from "next/link";
import arrow from "/public/arrow-right.svg";
import imagem from "/public/featured-image.svg";
import dynamic from "next/dynamic";

// Importação dinâmica do componente MotionDiv para animações
const MotionDiv = dynamic(() => import("./animation/MotionDiv"), {
  ssr: false,
});

export default function SectionHero() {
  return (
    <section className="w-full">
      <MotionDiv
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex cel:flex-col-reverse gap-8 desktop:flex-row pb-16 items-center justify-between w-full"
      >
        
        {/* Texto Principal da Section */}
        <div className="flex flex-col gap-4 desktop:w-1/2">
          <h1 className="text-4xl font-bold text-purple-text">
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </h1>
          <p className="text-lg text-white-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.{" "}
          </p>
          <Link
            className="flex gap-2 hover:translate-x-1 transition-transform duration-300 "
            href="/"
          >
            <span className="text-purple-text text-lg">Veja mais</span>
            <Image src={arrow} alt="flecha" width={24} height={24}></Image>
          </Link>
        </div>

        {/* Imagem */}
        <div>
          <Image
            layout="responsive"
            width={570}
            height={346}
            src={imagem}
            alt=""
          />
        </div>
      </MotionDiv>
    </section>
  );
}
