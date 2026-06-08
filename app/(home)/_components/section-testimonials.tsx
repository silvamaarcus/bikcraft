import Image from 'next/image';

const SectionTestimonials = () => {
  return (
    <section className="flex h-170 w-full items-center">
      <div className="h-full w-1/2">
        <Image
          width={780}
          height={700}
          src="/png/img-depoimento.png"
          alt="Imagem"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-p1 text-p5 flex h-full w-1/2 flex-col justify-end">
        <div className="m-20 w-[540]">
          <h2 className="mb-8 font-serif text-4xl font-semibold italic">
            &quot;Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft
            fez foi intensificar o meu amor por esta atividade. Recomendo à
            todos que amo.&quot;
          </h2>
          <p className="font-sans text-2xl">Anna Cecília</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonials;
