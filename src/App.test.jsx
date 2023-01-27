import App from './App';
import { render, screen } from '@testing-library/react';

describe('simple working test', () => {
  it('renders', () => {
    expect.hasAssertions();

    const view = render(<App />);

    expect(view).toMatchSnapshot();
  });
});
