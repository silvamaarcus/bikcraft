import Image from 'next/image';

interface TechsCardProps {
  iconPath: string;
  title: string;
  description: string;
}

const TechsCard = ({ iconPath, title, description }: TechsCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Image width={24} height={24} src={iconPath} alt={title} />
      <h3 className="font-sans text-2xl text-white">{title}</h3>
      <p className="text-c5">{description}</p>
    </div>
  );
};

export default TechsCard;
