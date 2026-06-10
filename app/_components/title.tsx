interface TitleProps {
  subtitle?: string | number;
  title: string;
  color?: 'white' | 'black';
}

const TitleComponent = ({ subtitle, title, color = 'black' }: TitleProps) => {
  return (
    <>
      {subtitle && (
        <p className="text-c5 mb-2 font-mono text-2xl font-medium uppercase">
          {subtitle}
        </p>
      )}

      <h1
        className={`text-hero font-sans font-semibold ${color === 'black' ? 'text-black' : 'text-white'}`}
      >
        {title}
        <span className="text-p1">.</span>
      </h1>
    </>
  );
};

export default TitleComponent;
