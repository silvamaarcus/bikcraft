import TitleComponent from '../_components/title';
import BudgetAction from './_components/budget-action';

const BudgetPage = () => {
  return (
    <section>
      <div className="bg-foreground w-full">
        <div className="container pt-15 pb-96">
          <TitleComponent
            title="solicite um orçamento"
            color="white"
            subtitle="cotações no seu email"
          />
        </div>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <BudgetAction />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetPage;
