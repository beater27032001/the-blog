import Image from "next/image";
import Link from "next/link";
import arrow from "/public/arrow-right.svg";
import imagem from "/public/featured-image.svg"

export default function SectionHero() {
  return (
    <section className="w-full bg-purple-bg">
      <div className="grid grid-cols-2 gap-[30px] px-[135px] pb-[69px] place-items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-purple-text">
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </h1>
          <p className="text-lg text-white-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.{" "}
          </p>
          <Link className="flex gap-2" href="/">
            <span className="text-purple-text text-lg">Veja mais</span>
            <Image src={arrow} alt="flecha" width={24} height={24}></Image>
          </Link>
        </div>
        <div>
          <Image src={imagem} alt="" width={570} height={346}></Image>
        </div>
      </div>
      <div className="bg-lime w-full h-1"></div>
    </section>
  );
}
