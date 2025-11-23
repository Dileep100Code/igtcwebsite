import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import { NewsSection } from './NewsSection';
import type { NewsCardProps } from './NewsCard';

// Feature: igtc-esports-website, Property 4: News card required fields
// Feature: igtc-esports-website, Property 5: News chronological ordering
describe('NewsSection Property Tests', () => {
  const newsItemArbitrary = fc.record({
    id: fc.uuid(),
    title: fc.string({ minLength: 5, maxLength: 100 }),
    date: fc.date({ min: new Date('2020-01-01'), max: new Date('2025-12-31') }),
    preview: fc.string({ minLength: 20, maxLength: 200 }),
    image: fc.constant('https://example.com/image.jpg'),
    category: fc.constantFrom('Tournament', 'Team', 'Partnership', 'News')
  });

  it('Property 4: all news cards contain required fields (title, date, preview)', () => {
    fc.assert(
      fc.property(fc.array(newsItemArbitrary, { minLength: 1, maxLength: 10 }), (newsItems) => {
        const newsProps: NewsCardProps[] = newsItems.map(item => ({
          ...item,
          onClick: () => {}
        }));
        
        render(<NewsSection news={newsProps} />);
        
        newsItems.forEach(item => {
          expect(screen.getByText(item.title)).toBeInTheDocument();
          expect(screen.getByText(item.preview)).toBeInTheDocument();
        });
      }),
      { numRuns: 100 }
    );
  });

  it('Property 5: news items are displayed in reverse chronological order', () => {
    fc.assert(
      fc.property(
        fc.array(newsItemArbitrary, { minLength: 2, maxLength: 5 }),
        (newsItems) => {
          const newsProps: NewsCardProps[] = newsItems.map(item => ({
            ...item,
            onClick: () => {}
          }));
          
          const { container } = render(<NewsSection news={newsProps} />);
          
          const titles = Array.from(container.querySelectorAll('h3')).map(
            el => el.textContent
          );
          
          const sortedTitles = [...newsItems]
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map(item => item.title);
          
          expect(titles.slice(1)).toEqual(sortedTitles);
        }
      ),
      { numRuns: 100 }
    );
  });
});
