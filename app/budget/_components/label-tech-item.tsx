import Image from 'next/image';

interface LabelTechItemProps {
  iconPath: string;
  title: string;
}

const LabelTechItem = ({ iconPath, title }: LabelTechItemProps) => {
  return (
    <div className="flex w-full items-center gap-2">
      <Image width={16} height={16} src={iconPath} alt={title} />
      <h3 className="text-c8 text-xs">{title}</h3>
    </div>
  );
};

export default LabelTechItem;
