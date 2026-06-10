interface TechnicalDetailsItemProps {
  name: string;
  value: string | number;
  border?: boolean;
}

const TechnicalDetailsItem = ({
  name,
  value,
  border = true,
}: TechnicalDetailsItemProps) => {
  return (
    <div
      className={`flex w-full items-center justify-between ${border ? 'border-11 border-b pb-3' : ''}`}
    >
      <p className="text-c4 font-mono">{name}</p>
      <p className="text-c6 font-mono">{value}</p>
    </div>
  );
};

export default TechnicalDetailsItem;
