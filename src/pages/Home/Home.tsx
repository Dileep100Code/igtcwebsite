import { Hero } from '../../components/Hero/Hero';
import { ServicesSection } from '../../components/Services/ServicesSection';
import { MentorsSection } from '../../components/Mentors/MentorsSection';

export const Home = () => {
  return (
    <>
      <Hero
        ctaButtons={[
          {
            text: 'Explore More',
            action: () => console.log('Explore clicked'),
            variant: 'primary'
          }
        ]}
      />
      <ServicesSection />
      <MentorsSection />
    </>
  );
};
