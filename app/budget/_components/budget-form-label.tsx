interface LabelBudgetActionProps {
  title: string;
}

const LabelBudgetAction = ({ title }: LabelBudgetActionProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-p1 h-2 w-1"></span>
      <p className="text-c5 text-xs font-semibold uppercase">{title}</p>
    </div>
  );
};

export default LabelBudgetAction;
