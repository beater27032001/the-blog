"use client";

import imagem1 from "/public/post-1.svg";
import imagem2 from "/public/post-2.svg";
import imagem3 from "/public/post-3.svg";
import imagem4 from "/public/post-4.svg";
import Card from "./Card";

import dynamic from "next/dynamic";

const MotionDiv = dynamic(() => import("../animation/MotionDiv"), {
  ssr: false,
});

export default function MainCard() {
  return (
    <main className="flex flex-col w-full px-32 mt-16 gap-16 pb-16">
      <div className="grid grid-cols-2 gap-32">
        <Card
          img={imagem1}
          title="Começando no ReactJS em 2022"
          date="Janeiro 04, 2022"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean."
        />
        <div className="flex flex-col gap-6">
          <Card
            title={
              "Conheça as principais técnicas para conseguir uma vaga internacional em programação"
            }
            date={"Janeiro 04, 2022"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
            }
          />
          <div className="h-0.5 bg-purple-search"></div>
          <Card
            title={"Veja a evolução do Front-end na prática"}
            date={"Janeiro 04, 2022"}
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. "
            }
          />
        </div>
      </div>
      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}

        className="grid grid-cols-3 gap-7"
      >
        <Card
          img={imagem2}
          title="10 dicas para conseguir a vaga desejada"
          date="Janeiro 04, 2022"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />
        <Card
          img={imagem3}
          title="Deixe seu código mais semântico com essas dicas"
          date="Janeiro 04, 2022"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />
        <Card
          img={imagem4}
          title="Use essas dicas nas suas aplicações mobile"
          date="Janeiro 04, 2022"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. "
        />
      </MotionDiv>
    </main>
  );
}
