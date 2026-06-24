import TitleComponent from '../_components/title';
import {
  TermItem,
  TermItemParagraph,
  TermItemTitle,
} from './_components/term-item';

const TermsPage = () => {
  return (
    <section>
      <div className="bg-foreground">
        <div className="app-container py-15">
          <TitleComponent
            subtitle="Termos de uso"
            title="termos e condições"
            color="white"
          />
        </div>
      </div>
      <div>
        <div className="app-container flex flex-col space-y-12 py-30">
          <TermItem>
            <TermItemTitle>1. Política de Estorno</TermItemTitle>
            <TermItemParagraph>
              1.1 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
            <TermItemParagraph>
              1.2 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
            <TermItemParagraph>
              1.3 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
          </TermItem>
          <TermItem>
            <TermItemTitle>2. Conta do Usuário</TermItemTitle>
            <TermItemParagraph>
              2.1 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
            <TermItemParagraph>
              2.2 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
            <TermItemParagraph>
              2.3 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
          </TermItem>
          <TermItem>
            <TermItemTitle>3. Seguro Bikcraft</TermItemTitle>
            <TermItemParagraph>
              3.1 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
            <TermItemParagraph>
              3.2 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
            <TermItemParagraph>
              3.3 Aceitamos cartões de crédito com as bandeiras: Visa,
              Mastercard, ELO e American Express. Para pagamentos à vista também
              aceitarmos PIX e Boleto através do PagSeguro.
            </TermItemParagraph>
          </TermItem>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
