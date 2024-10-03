import Image from "next/image";

// Definição da interface para as propriedades do componente Card
interface ICardProps {
    img?: string;
    title: string;
    date: string;
    paragraph: string;
}

export default function Card({
    img,
    title,
    date,
    paragraph,
}: ICardProps) {
    return (
        <div className="flex flex-col gap-4">
            {/* Renderiza a imagem se ela for fornecida, se não renderiza um espaço vazio */}
            {img ? (
            <Image src={img} alt={img} layout="responsive" />
            ) : (
            ""
            )}
            {/* Renderiza a data */}
            <span className="text-base text-black">{date}</span>
            
            {/* Renderiza o título */}
            <h3 className="text-2xl text-purple-bg">{title}</h3>

            {/* Renderiza o parágrafo */}
            <p className="text-black text-base">{paragraph}</p>
        </div>
    );
}
