import { Hero } from '../../components/Hero/Hero';
import { NewsSection } from '../../components/News/NewsSection';
import { SponsorsSection } from '../../components/Sponsors/SponsorsSection';
import { CollaborationsSection } from '../../components/Collaborations/CollaborationsSection';
import type { NewsCardProps } from '../../components/News/NewsCard';
import type { Sponsor } from '../../components/Sponsors/SponsorsSection';
import type { Collaboration } from '../../components/Collaborations/CollaborationsSection';

const mockNews: NewsCardProps[] = [
  {
    id: '1',
    title: 'IGTC Wins Regional Championship',
    date: new Date('2024-11-20'),
    preview: 'Our team dominated the regional finals with an impressive 3-0 victory, securing our spot in the international tournament.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop',
    category: 'Tournament',
    onClick: () => console.log('News 1 clicked')
  },
  {
    id: '2',
    title: 'New Roster Announcement',
    date: new Date('2024-11-18'),
    preview: 'We are excited to announce three new players joining our competitive roster for the upcoming season.',
    image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=600&fit=crop',
    category: 'Team',
    onClick: () => console.log('News 2 clicked')
  },
  {
    id: '3',
    title: 'Partnership with Major Brand',
    date: new Date('2024-11-15'),
    preview: 'IGTC ESPORTS announces strategic partnership with leading gaming peripheral manufacturer.',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop',
    category: 'Partnership',
    onClick: () => console.log('News 3 clicked')
  }
];

const mockSponsors: Sponsor[] = [
  {
    id: '1',
    name: 'TechGear Pro',
    logo: 'https://via.placeholder.com/200x80/00ff88/000000?text=TechGear+Pro',
    tier: 'platinum',
    website: 'https://example.com'
  },
  {
    id: '2',
    name: 'GameFuel',
    logo: 'https://via.placeholder.com/180x70/0066ff/ffffff?text=GameFuel',
    tier: 'gold',
    website: 'https://example.com'
  },
  {
    id: '3',
    name: 'StreamMax',
    logo: 'https://via.placeholder.com/180x70/0066ff/ffffff?text=StreamMax',
    tier: 'gold',
    website: 'https://example.com'
  },
  {
    id: '4',
    name: 'ProGaming',
    logo: 'https://via.placeholder.com/160x60/666666/ffffff?text=ProGaming',
    tier: 'silver',
    website: 'https://example.com'
  }
];

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
        title="IGTC ESPORTS"
        subtitle="Elite competitive gaming organization dominating tournaments worldwide. Join our championship teams in Mobile Legends, PUBG Mobile, Free Fire, and more. Professional training, global competitions, and career opportunities await."
        ctaButtons={[
          {
            text: 'Join Our Team',
            action: () => console.log('Join clicked'),
            variant: 'primary'
          },
          {
            text: 'Watch Tournaments',
            action: () => console.log('Watch clicked'),
            variant: 'secondary'
          }
        ]}
      />
      <NewsSection news={mockNews} />
      <SponsorsSection sponsors={mockSponsors} />
      <CollaborationsSection collaborations={mockCollaborations} />
    </>
  );
};
