import { Button } from './ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from './ui/card';

interface SectionInsuranceCardProps {
  price: string;
  description: React.ReactNode;
  type: 'silver' | 'gold';
}

const SectionInsuranceCard = ({
  price,
  description,
  type,
}: SectionInsuranceCardProps) => {
  return (
    <Card className="min-h-96 w-full max-w-sm min-w-140 bg-black p-8 text-white">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h3
            className={`${type === 'silver' ? 'text-c8' : 'text-p1'} text-4xl font-semibold`}
          >
            {type === 'silver' ? 'PRATA' : 'OURO'}
          </h3>
          <span className="flex flex-col items-end justify-end">
            <span className="text-2xl font-semibold text-white">
              R$ {price}
            </span>
            <span className="text-c6 text-xs font-semibold">mensal</span>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardAction className="pl-6">
        <Button
          variant={type === 'silver' ? 'secondary' : 'default'}
          className="uppercase"
          size="lg"
        >
          INSCREVA-SE
        </Button>
      </CardAction>
    </Card>
  );
};

export default SectionInsuranceCard;
