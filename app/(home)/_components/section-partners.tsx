import Image from 'next/image';

import TitleComponent from '@/app/_components/title';

const SectionPartners = () => {
  return (
    <section className="my-30">
      <div className="app-container">
        <TitleComponent title="nossos parceiros" color="black" />

        <div className="my-25">
          {/* Primeira linha de parceiros */}
          <div className="flex">
            <div className="border-c2 border-r-2 border-b-2 px-25 py-12.5">
              <Image
                width={148}
                height={38}
                src="/png/parceiro-caravan.png"
                alt="Parceiro 1"
              />
            </div>
            <div className="border-c2 border-r-2 border-b-2 px-25 py-12.5">
              <Image
                width={148}
                height={38}
                src="/png/parceiro-ranek.png"
                alt="Parceiro 1"
              />
            </div>
            <div className="border-c2 border-r-2 border-b-2 px-25 py-12.5">
              <Image
                width={148}
                height={38}
                src="/png/parceiro-handel.png"
                alt="Parceiro 1"
              />
            </div>
            <div className="border-c2 border-b-2 px-25 py-12.5">
              <Image
                width={148}
                height={38}
                src="/png/parceiro-dogs.png"
                alt="Parceiro 1"
              />
            </div>
          </div>
          {/* Segunda linha de parceiros */}
          <div className="flex">
            <div className="border-c2 border-r-2 px-25 py-12.5">
              <Image
                width={148}
                height={38}
                src="/png/parceiro-lescone.png"
                alt="Parceiro 1"
              />
            </div>
            <div className="border-c2 border-r-2 px-25 py-12.5">
              <Image
                width={148}
                height={38}
                src="/png/parceiro-flexblog.png"
                alt="Parceiro 1"
              />
            </div>
            <div className="border-c2 border-r-2 px-25 py-12.5">
              <Image
                width={148}
                height={38}
                src="/png/parceiro-wildbeast.png"
                alt="Parceiro 1"
              />
            </div>
            <div className="border-c2 px-25 py-12.5">
              <Image
                width={148}
                height={38}
                src="/png/parceiro-surfbot.png"
                alt="Parceiro 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPartners;
