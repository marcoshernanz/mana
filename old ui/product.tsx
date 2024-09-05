import Image from "next/image";

interface ProductProps {
  series: number;
  name: string;
  image: {
    src: string;
    height?: number;
    width?: number;
  };
}

export default function Product({ series, name, image }: ProductProps) {
  return (
    <div className="flex flex-col p-3">
      <span className="pb-2 text-sm font-medium text-zinc-950 dark:text-slate-200">
        MANA {series} series
      </span>
      <span className="pb-4 text-sm text-zinc-900 dark:text-slate-300">
        {name}
      </span>
      <Image
        src={image.src}
        alt={name}
        height={image.height || 250}
        width={image.width || 250}
        className="pb-4"
      ></Image>
      <button className="pb-2 text-start text-sm font-medium text-zinc-950 hover:underline dark:text-slate-50">
        {"Learn More >"}
      </button>
    </div>
  );
}
