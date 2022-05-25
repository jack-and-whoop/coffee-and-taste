import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title of page ', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Coffee-and-Taste');
  });
});
