import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('renders with title and subtitle', () => {
    render(
      <Hero
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders CTA buttons when provided', () => {
    const mockAction = vi.fn();
    
    render(
      <Hero
        title="Test Title"
        subtitle="Test Subtitle"
        ctaButtons={[
          { text: 'Primary Button', action: mockAction, variant: 'primary' },
          { text: 'Secondary Button', action: mockAction, variant: 'secondary' }
        ]}
      />
    );
    
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
  });

  it('renders without CTA buttons', () => {
    render(
      <Hero
        title="Test Title"
        subtitle="Test Subtitle"
      />
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
