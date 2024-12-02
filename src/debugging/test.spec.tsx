import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  test('welcome modal appears on initial app load', () => {
    render(<App  />);
    
    const welcomeModal = screen.getByRole('dialog');
    expect(welcomeModal).toBeVisible();
  });
});
