import { render } from '@testing-library/react';

import CategoryContainer from './CategoryContainer';

describe('CategoryContainer', () => {
  it('renders category list ', () => {
    const { container } = render((<CategoryContainer />));

    expect(container).toHaveTextContent('커피');
  });
});
