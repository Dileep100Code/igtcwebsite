import { Hero } from '../../components/Hero/Hero';
import { ServicesSection } from '../../components/Services/ServicesSection';
import { CollaborationsSection } from '../../components/Collaborations/CollaborationsSection';
import type { Collaboration } from '../../components/Collaborations/CollaborationsSection';

const mockCollaborations: Collaboration[] = [
  {
    id: '1',
    title: 'Community Tournament Series',
    description: 'Monthly tournaments open to all skill levels with prize pools and exclusive rewards.',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800',
    link: 'https://example.com'
  },
  {
    id: '2',
    title: 'Youth Development Program',
    description: 'Training and mentorship program for aspiring esports athletes aged 13-18.',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800',
    link: 'https://example.com'
  },
  {
    id: '3',
    title: 'Content Creator Network',
    description: 'Collaborative platform connecting streamers and content creators in the esports community.',
    image: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=800',
    link: 'https://example.com'
  }
];

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
      <CollaborationsSection collaborations={mockCollaborations} />
    </>
  );
};
