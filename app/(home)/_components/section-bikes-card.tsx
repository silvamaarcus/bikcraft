import Image from 'next/image';

interface SectionBikesCardProps {
  url: string;
  name: string;
  price: string;
}

const SectionBikesCard = ({ url, name, price }: SectionBikesCardProps) => {
  return (
    <div className="h-150">
      <Image
        src={url}
        width={450}
        height={520}
        alt={name}
        className="h-130 w-112.5 rounded-md object-cover"
      />

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-p1 h-2 w-3"></span>
          <h2 className="font-sans text-3xl font-semibold text-black">
            {name}
          </h2>
        </div>
        <p className="text-c8 font-mono text-lg">{price}</p>
      </div>
    </div>
  );
};

export default SectionBikesCard;
