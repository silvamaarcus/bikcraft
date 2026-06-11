import Image from 'next/image';

interface ChoiceBikeCardProps {
  url: string;
  name: string;
  price: string;
}

const ChoiceBikeCard = ({ url, name, price }: ChoiceBikeCardProps) => {
  return (
    <div className="h-150">
      <Image
        src={url}
        width={560}
        height={340}
        alt={name}
        className="h-85 w-140 rounded-md object-cover"
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

export default ChoiceBikeCard;
