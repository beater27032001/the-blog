import Image from "next/image";

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
            {img ? (
            <Image src={img} alt={img} layout="responsive" />
            ) : (
            ""
            )}

            <span className="text-base text-black">{date}</span>
            <h3 className="text-2xl text-purple-bg">{title}</h3>
            <p className="text-black text-base">{paragraph}</p>
        </div>
    );
}
