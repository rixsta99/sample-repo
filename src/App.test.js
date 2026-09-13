import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Aspen Tree architecture homepage', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /integration architecture, engineered for production pressure/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /clarity at the boundaries/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /triage that turns pressure into progress/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  expect(screen.getByText(/AWS API Gateway/i)).toBeInTheDocument();
  expect(screen.getByText(/AWS Bedrock/i)).toBeInTheDocument();
  expect(screen.getByText(/450x/i)).toBeInTheDocument();
  expect(screen.getByText(/thread-safe session caching/i)).toBeInTheDocument();
  expect(screen.getByText(/multiply the team/i)).toBeInTheDocument();
});

test('does not expose personal or employer-specific details', () => {
  render(<App />);
  const page = document.body.textContent;

  expect(page).not.toMatch(/ricki|amp|brisbane|@|0410|payday|superchoice/i);
  expect(page).not.toMatch(/phone/i);
});
