import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NewsCard, NewsCardProps } from './NewsCard';

describe('NewsCard Component', () => {
  const mockNewsCard: NewsCardProps = {
    id: '1',
    title: 'Test News Title',
    date: new Date('2024-11-20'),
    preview: 'This is a test preview text',
    image: 'https://example.com/image.jpg',
    category: 'Tournament',
    onClick: vi.fn()
  };

  it('displays all required fields', () => {
    render(<NewsCard {...mockNewsCard} />);
    
    expect(screen.getByText('Test News Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test preview text')).toBeInTheDocument();
    expect(screen.getByText('Tournament')).toBeInTheDocument();
    expect(screen.getByText(/November 20, 2024/)).toBeInTheDocument();
  });

  it('displays the image with correct alt text', () => {
    render(<NewsCard {...mockNewsCard} />);
    
    const image = screen.getByAltText('Test News Title');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('displays read more button', () => {
    render(<NewsCard {...mockNewsCard} />);
    
    expect(screen.getByText(/Read More/)).toBeInTheDocument();
  });
});
