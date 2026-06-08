import { Check } from 'lucide-react';

interface SectionInsuranceCardItemProps {
  text: string;
}

const SectionInsuranceCardItem = ({ text }: SectionInsuranceCardItemProps) => {
  return (
    <li className="flex items-center gap-2 text-lg text-white">
      <Check className="text-p1 size-5" />
      {text}
    </li>
  );
};

export default SectionInsuranceCardItem;
