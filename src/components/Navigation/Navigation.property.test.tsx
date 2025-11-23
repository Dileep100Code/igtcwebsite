import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as fc from 'fast-check';
import { Navigation } from './Navigation';

// Feature: igtc-esports-website, Property 1: Navigation link routing
describe('Navigation Property Tests', () => {
  it('should have valid paths for all navigation links', () => {
    fc.assert(
      fc.property(fc.constantFrom('/', '/esports', '/rankings', '/games', '/about'), (path) => {
        const { container } = render(
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        );
        
        const link = container.querySelector(`a[href="${path}"]`);
        expect(link).toBeTruthy();
        expect(link?.getAttribute('href')).toBe(path);
      }),
      { numRuns: 100 }
    );
  });
});
