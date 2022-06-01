import { render } from '@testing-library/react';

import MenuGroupContainer from './MenuGroupContainer';

describe('MenuGroupContainer', () => {
  it('renders menu group ', () => {
    const { container } = render(
      <MenuGroupContainer />,
    );

    expect(container).toHaveTextContent('커피');
  });
});
