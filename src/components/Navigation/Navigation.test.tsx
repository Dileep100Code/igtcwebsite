import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation Component', () => {
  const renderNavigation = () => {
    return render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  };

  it('renders all required navigation links', () => {
    renderNavigation();
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Esports')).toBeInTheDocument();
    expect(screen.getByText('Rankings')).toBeInTheDocument();
    expect(screen.getByText('Games')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
  });

  it('displays notification icon', () => {
    renderNavigation();
    
    const notificationBtn = screen.getByLabelText('Notifications');
    expect(notificationBtn).toBeInTheDocument();
  });

  it('displays login button', () => {
    renderNavigation();
    
    const loginBtn = screen.getByText('Login');
    expect(loginBtn).toBeInTheDocument();
  });

  it('displays IGTC ESPORTS logo', () => {
    renderNavigation();
    
    expect(screen.getByText('IGTC')).toBeInTheDocument();
    expect(screen.getByText('ESPORTS')).toBeInTheDocument();
  });
});
