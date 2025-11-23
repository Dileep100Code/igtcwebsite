import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import { SponsorsSection, Sponsor } from './SponsorsSection';

// Feature: igtc-esports-website, Property 8: Sponsor tier differentiation
// Feature: igtc-esports-website, Property 9: Sponsor click behavior
describe('SponsorsSection Property Tests', () => {
  const sponsorArbitrary = fc.record({
    id: fc.uuid(),
    name: fc.string({ minLength: 3, maxLength: 50 }),
    logo: fc.constant('https://example.com/logo.png'),
    tier: fc.constantFrom('platinum', 'gold', 'silver'),
    website: fc.option(fc.webUrl(), { nil: undefined })
  });

  it('Property 8: sponsors with different tiers have different CSS classes', () => {
    fc.assert(
      fc.property(
        fc.array(sponsorArbitrary, { minLength: 2, maxLength: 6 }),
        (sponsors) => {
          const typedSponsors = sponsors as Sponsor[];
          const { container } = render(<SponsorsSection sponsors={typedSponsors} />);
          
          const platinumCards = container.querySelectorAll('.platinum');
          const goldCards = container.querySelectorAll('.gold');
          const silverCards = container.querySelectorAll('.silver');
          
          const platinumCount = typedSponsors.filter(s => s.tier === 'platinum').length;
          const goldCount = typedSponsors.filter(s => s.tier === 'gold').length;
          const silverCount = typedSponsors.filter(s => s.tier === 'silver').length;
          
          expect(platinumCards.length).toBe(platinumCount);
          expect(goldCards.length).toBe(goldCount);
          expect(silverCards.length).toBe(silverCount);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 9: sponsor cards are clickable elements', () => {
    fc.assert(
      fc.property(
        fc.array(sponsorArbitrary, { minLength: 1, maxLength: 5 }),
        (sponsors) => {
          const typedSponsors = sponsors as Sponsor[];
          const { container } = render(<SponsorsSection sponsors={typedSponsors} />);
          
          const clickableCards = container.querySelectorAll('[class*="sponsorCard"]');
          expect(clickableCards.length).toBe(typedSponsors.length);
        }
      ),
      { numRuns: 50 }
    );
  });
});
