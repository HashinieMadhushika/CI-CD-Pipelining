import { render, screen, fireEvent } from '@testing-library/react';
import CreateTask from './CreateTask';

test('renders Create Task form', () => {
  render(<CreateTask />);
  expect(screen.getByText(/create task/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/task name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/due date/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /create/i })).toBeInTheDocument();
});

test('shows error when task name is empty', () => {
  render(<CreateTask />);
  const createButton = screen.getByRole('button', { name: /create/i });
  fireEvent.click(createButton);
  expect(screen.getByText(/task name is required/i)).toBeInTheDocument();
});

test('shows error when due date is empty', () => {
  render(<CreateTask />);
  const createButton = screen.getByRole('button', { name: /create/i });
  fireEvent.click(createButton);
  expect(screen.getByText(/due date is required/i)).toBeInTheDocument();
});

test('shows error when due date is in the past', () => {
  render(<CreateTask />);
  const dueDateInput = screen.getByPlaceholderText(/due date/i);
  const pastDate = new Date();
  pastDate.setDate(pastDate.getDate() - 1);
  const formattedPastDate = pastDate.toISOString().split('T')[0];
  fireEvent.change(dueDateInput, { target: { value: formattedPastDate } });

  const createButton = screen.getByRole('button', { name: /create/i });
  fireEvent.click(createButton);

  expect(screen.getByText(/due date cannot be in the past/i)).toBeInTheDocument();
});

test('does not show error when form is valid', () => {
  render(<CreateTask />);
  const taskNameInput = screen.getByPlaceholderText(/task name/i);
  const dueDateInput = screen.getByPlaceholderText(/due date/i);
  const createButton = screen.getByRole('button', { name: /create/i });

  fireEvent.change(taskNameInput, { target: { value: 'New Task' } });

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 1);
  const formattedFutureDate = futureDate.toISOString().split('T')[0];
  fireEvent.change(dueDateInput, { target: { value: formattedFutureDate } });

  fireEvent.click(createButton);

  expect(screen.queryByText(/task name is required/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/due date is required/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/due date cannot be in the past/i)).not.toBeInTheDocument();
});