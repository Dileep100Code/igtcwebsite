import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useIntersectionObserver } from './useIntersectionObserver';

// Feature: igtc-esports-website, Property 12: Scroll-triggered animations
describe('useIntersectionObserver Hook', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    (globalThis as any).IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  it('returns a ref and visibility state', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    
    const [ref, isVisible] = result.current;
    
    expect(ref).toBeDefined();
    expect(typeof isVisible).toBe('boolean');
  });

  it('initializes with isVisible as false', () => {
    const { result } = renderHook(() => useIntersectionObserver());
    
    const [, isVisible] = result.current;
    
    expect(isVisible).toBe(false);
  });
});
