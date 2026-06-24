interface TermItemProps {
  children: React.ReactNode;
}

interface TermItemTitleProps {
  children: React.ReactNode;
}

interface TermItemParagraphProps {
  children: React.ReactNode;
}

const TermItemTitle = ({ children }: TermItemTitleProps) => {
  return <h2 className="mb-5 text-2xl font-semibold">{children}</h2>;
};

const TermItemParagraph = ({ children }: TermItemParagraphProps) => {
  return <p className="mt-2 font-mono text-lg">{children}</p>;
};

const TermItem = ({ children }: TermItemProps) => {
  return <div className="flex w-full flex-col">{children}</div>;
};

export { TermItem, TermItemParagraph, TermItemTitle };
