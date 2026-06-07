interface TitleProps {
  text: string;
  color?: 'white' | 'black';
}

const Title = ({ text, color = 'black' }: TitleProps) => {
  return (
    <h1
      className={`text-hero font-sans font-semibold ${color === 'black' ? 'text-black' : 'text-white'}`}
    >
      {text}
      <span className="text-p1">.</span>
    </h1>
  );
};

export default Title;
