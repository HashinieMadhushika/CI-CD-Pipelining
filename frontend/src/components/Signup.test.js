
import { render, screen } from '@testing-library/react';
import Signup from './Signup';

test('renders signup form', () => {
  render(<Signup />);
  const emailInput = screen.getByPlaceholderText(/email/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const signupButton = screen.getByRole('button', { name: /sign up/i });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(signupButton).toBeInTheDocument();
});
