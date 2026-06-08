import Image from 'next/image';

interface SectionTechsCardProps {
  iconPath: string;
  title: string;
  description: string;
}

const SectionTechsCard = ({
  iconPath,
  title,
  description,
}: SectionTechsCardProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Image width={24} height={24} src={iconPath} alt={title} />
      <h3 className="font-sans text-2xl text-white">{title}</h3>
      <p className="text-c5">{description}</p>
    </div>
  );
};

export default SectionTechsCard;
