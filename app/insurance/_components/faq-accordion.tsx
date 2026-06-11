import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/_components/ui/accordion';

const items = [
  {
    value: 'paymentType',
    trigger: 'Qual forma de pagamento vocês aceitam?',
    content:
      'Aceitamos cartões de crédito com as bandeiras: Visa, Mastercard, ELO e American Express. Para pagamentos à vista também aceitarmos PIX e Boleto através do PagSeguro.',
  },
  {
    value: 'contact',
    trigger: 'Como posso entrar em contato?',
    content:
      'Você pode entrar em contato conosco pelo e-mail contato@bikcraft.com, pelo telefone (21) 9999-9999 ou diretamente através do nosso WhatsApp de suporte disponível no site.',
  },
  {
    value: 'discount',
    trigger: 'Vocês possuem algum desconto?',
    content:
      'Oferecemos 5% de desconto para pagamentos à vista via PIX ou boleto bancário. Fique de olho também na nossa newsletter para receber cupons e promoções exclusivas!',
  },
  {
    value: 'guarantee',
    trigger: 'Qual a garantia que possuo?',
    content:
      'Garantimos a qualidade das nossas bikes. O quadro da Bikcraft possui garantia vitalícia contra defeitos de fabricação, e os componentes (como marchas e freios) possuem 2 anos de garantia oficial do fabricante.',
  },
  {
    value: 'paymentTicket',
    trigger: 'Posso parcelar no boleto?',
    content:
      'O pagamento via boleto bancário está disponível apenas para a opção à vista. Para parcelamento, você pode utilizar o cartão de crédito em até 12x sem juros.',
  },
  {
    value: 'changes',
    trigger: 'Quantas trocas posso fazer ao ano?',
    content:
      'Você pode realizar até 2 trocas de componentes ou acessórios por ano sem custos adicionais de mão de obra em nossas oficinas autorizadas, desde que dentro das especificações do seu plano.',
  },
  {
    value: 'sizeChoice',
    trigger: 'Qual Bikcraft devo escolher para o meu tamanho?',
    content:
      'A escolha depende da sua altura! Em geral: P (para 1,60m a 1,70m), M (para 1,71m a 1,80m) e G (para 1,81m a 1,90m). Você também pode usar nosso simulador de medidas na página de compra para um ajuste perfeito.',
  },
];

const FaqAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full overflow-hidden rounded-lg border"
      defaultValue="paymentType"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="odd:bg-c2 border-b px-4 last:border-b-0 even:bg-transparent"
        >
          <AccordionTrigger className="flex cursor-pointer items-center gap-2 font-mono text-lg font-bold text-black">
            <span className="bg-p1 h-2 w-3"></span>
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="text-c9 h-full max-w-220 font-mono text-lg">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
