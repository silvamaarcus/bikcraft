import SectionBikes from './_components/section-bikes';
import SectionHero from './_components/section-hero';
import SectionPartners from './_components/section-partners';
import SectionTechs from './_components/section-techs';

const HomePage = () => {
  return (
    <>
      <SectionHero />
      <SectionBikes />
      <SectionTechs />
      <SectionPartners />
    </>
  );
};

export default HomePage;
