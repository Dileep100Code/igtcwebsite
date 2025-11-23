import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Create floating background shapes
const createBackgroundShapes = () => {
  for (let i = 1; i <= 4; i++) {
    const shape = document.createElement('div');
    shape.className = `bg-shape bg-shape-${i}`;
    document.body.appendChild(shape);
  }
};

// Initialize background animation
createBackgroundShapes();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
