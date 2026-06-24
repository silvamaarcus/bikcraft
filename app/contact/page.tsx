import TitleComponent from '../_components/title';
import ContactAction from './_components/contact-action';
import StoreLocaleCard from './_components/store-locale-card';

const ContactPage = () => {
  return (
    <section>
      <div className="bg-foreground w-full">
        <div className="app-container pt-15 pb-96">
          <TitleComponent
            title="nosso contato"
            color="white"
            subtitle="respostas em até 24h"
          />
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ContactAction />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="app-container pt-96">
          <TitleComponent title="lojas locais" color="black" />
          <div className="my-15 grid grid-cols-2">
            <StoreLocaleCard
              path="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235271.5880837987!2d-43.49595835287731!3d-22.87208379286453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1781218265775!5m2!1spt-BR!2sbr"
              city="Rio de Janeiro"
              email="email@email.com"
              openHour="08-18h de seg à dom"
              phoneNumer="(21) 99999-9999"
              street="Rua Ali Perto, 26"
            />

            <StoreLocaleCard
              path="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235271.5880837987!2d-43.49595835287731!3d-22.87208379286453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1781218265775!5m2!1spt-BR!2sbr"
              city="São Paulo"
              email="email@email.com"
              openHour="08-18h de seg à dom"
              phoneNumer="(11) 99999-9999"
              street="Rua Longe Demais, 16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
