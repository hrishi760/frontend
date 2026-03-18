import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App Component', () => {

  test('renders login view by default', () => {
    render(<App />);

    const loginButton = screen.getByRole('button', { name: /login/i });
    const registerLink = screen.getByText(/register/i);

    expect(loginButton).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });

  test('switches to register view when register link is clicked', () => {
    render(<App />);

    const registerLink = screen.getByText(/register/i);
    fireEvent.click(registerLink);

    const registerButton = screen.getByRole('button', { name: /register/i });
    expect(registerButton).toBeInTheDocument();
  });

  test('switches back to login view from register', () => {
    render(<App />);

    // go to register
    fireEvent.click(screen.getByText(/register/i));

    // go back to login (assuming link exists)
    const loginLink = screen.getByText(/login/i);
    fireEvent.click(loginLink);

    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('renders input fields', () => {
    render(<App />);

    const inputs = screen.getAllByRole('textbox');
    expect(inputs.length).toBeGreaterThan(0);
  });

  test('allows typing in input fields', () => {
    render(<App />);

    const inputs = screen.getAllByRole('textbox');

    fireEvent.change(inputs[0], { target: { value: 'testuser' } });
    expect(inputs[0]).toHaveValue('testuser');
  });

  test('handles login button click without crashing', () => {
    render(<App />);

    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    expect(loginButton).toBeInTheDocument();
  });

  test('register button works without crashing', () => {
    render(<App />);

    fireEvent.click(screen.getByText(/register/i));

    const registerButton = screen.getByRole('button', { name: /register/i });
    fireEvent.click(registerButton);

    expect(registerButton).toBeInTheDocument();
  });

});
