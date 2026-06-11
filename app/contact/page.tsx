import TitleComponent from '../_components/title';
import InsuranceForm from './_components/contact-form';

const ContactPage = () => {
  return (
    <section className="bg-foreground">
      <div className="container pt-15 pb-96">
        <TitleComponent
          title="nosso contato"
          color="white"
          subtitle="respostas em até 24h"
        />
      </div>
      <InsuranceForm />
    </section>
  );
};

export default ContactPage;
