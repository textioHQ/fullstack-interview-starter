import { render, screen } from '@testing-library/react';
import App from './App';

test('renders textarea', () => {
  render(<App />);
  const textarea = screen.getByRole('textbox')
  expect(textarea).toBeInTheDocument();
});
