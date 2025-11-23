import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

// Mock IntersectionObserver
class IntersectionObserverMock {
  observe = () => null;
  unobserve = () => null;
  disconnect = () => null;
}

(globalThis as any).IntersectionObserver = IntersectionObserverMock;

afterEach(() => {
  cleanup();
});
