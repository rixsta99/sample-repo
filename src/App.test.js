import { render, screen } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
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
=======
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> 3ea82893c4a28af3be9d5072a3e8efae46d545a4
});
