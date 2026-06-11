import { Clock } from 'lucide-react';

import { Card, CardContent } from '@/app/_components/ui/card';

interface StoreLocaleCard {
  path: string;
  city: string;
  street: string;
  email: string;
  phoneNumer: string;
  openHour: string;
}

const StoreLocaleCard = ({
  path,
  city,
  email,
  phoneNumer,
  street,
  openHour,
}: StoreLocaleCard) => {
  return (
    <Card className="w-140 max-w-140 rounded-none p-0 shadow">
      <iframe
        src={path}
        width="560px"
        height="260px"
        loading="lazy"
        className="object-cover"
      />
      <CardContent className="p-8">
        <div className="flex items-center gap-2">
          <span className="bg-p1 h-2 w-3"></span>
          <h2 className="font-sans text-3xl font-semibold text-black">
            {city}
          </h2>
        </div>

        <div className="my-8 flex items-center gap-15">
          <div className="text-c8 fonto-mono flex flex-col border-l pl-8">
            <span>{street}</span>
            <span>{city}</span>
          </div>
          <div className="text-c8 fonto-mono flex flex-col border-l pl-8">
            <span>{email}</span>
            <span>{phoneNumer}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="text-p1" />
          <p className="text black fonto-mono font-bold">{openHour}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreLocaleCard;
