import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import { CollaborationsSection, Collaboration } from './CollaborationsSection';

// Feature: igtc-esports-website, Property 10: Collaboration card content
// Feature: igtc-esports-website, Property 11: Collaboration interaction response
describe('CollaborationsSection Property Tests', () => {
  const collaborationArbitrary = fc.record({
    id: fc.uuid(),
    title: fc.string({ minLength: 5, maxLength: 100 }),
    description: fc.string({ minLength: 20, maxLength: 200 }),
    image: fc.constant('https://example.com/collab.jpg'),
    link: fc.option(fc.webUrl(), { nil: undefined })
  });

  it('Property 10: all collaboration cards contain both image and description', () => {
    fc.assert(
      fc.property(
        fc.array(collaborationArbitrary, { minLength: 1, maxLength: 6 }),
        (collaborations) => {
          const typedCollabs = collaborations as Collaboration[];
          render(<CollaborationsSection collaborations={typedCollabs} />);
          
          typedCollabs.forEach(collab => {
            expect(screen.getByText(collab.title)).toBeInTheDocument();
            expect(screen.getByText(collab.description)).toBeInTheDocument();
            expect(screen.getByAltText(collab.title)).toBeInTheDocument();
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Property 11: collaboration cards are interactive elements', () => {
    fc.assert(
      fc.property(
        fc.array(collaborationArbitrary, { minLength: 1, maxLength: 5 }),
        (collaborations) => {
          const typedCollabs = collaborations as Collaboration[];
          const { container } = render(<CollaborationsSection collaborations={typedCollabs} />);
          
          const cards = container.querySelectorAll('article');
          expect(cards.length).toBe(typedCollabs.length);
        }
      ),
      { numRuns: 50 }
    );
  });
});
