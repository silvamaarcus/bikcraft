import TitleComponent from '../_components/title';
import ContactForm from './_components/contact-form';

const ContactPage = () => {
  return (
    <section>
      <div className="bg-foreground w-full">
        <div className="container pt-15 pb-96">
          <TitleComponent
            title="nosso contato"
            color="white"
            subtitle="respostas em até 24h"
          />
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container py-96">
          <TitleComponent title="lojas locais" color="black" />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
