import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SponsorsSection, Sponsor } from './SponsorsSection';

describe('SponsorsSection Component', () => {
  const mockSponsors: Sponsor[] = [
    {
      id: '1',
      name: 'Platinum Sponsor',
      logo: 'https://example.com/platinum.png',
      tier: 'platinum',
      website: 'https://platinum.com'
    },
    {
      id: '2',
      name: 'Gold Sponsor',
      logo: 'https://example.com/gold.png',
      tier: 'gold',
      website: 'https://gold.com'
    },
    {
      id: '3',
      name: 'Silver Sponsor',
      logo: 'https://example.com/silver.png',
      tier: 'silver'
    }
  ];

  it('renders sponsors section', () => {
    render(<SponsorsSection sponsors={mockSponsors} />);
    
    expect(screen.getByText('Our Sponsors & Partners')).toBeInTheDocument();
  });

  it('displays all sponsor logos', () => {
    render(<SponsorsSection sponsors={mockSponsors} />);
    
    expect(screen.getByAltText('Platinum Sponsor')).toBeInTheDocument();
    expect(screen.getByAltText('Gold Sponsor')).toBeInTheDocument();
    expect(screen.getByAltText('Silver Sponsor')).toBeInTheDocument();
  });
});
