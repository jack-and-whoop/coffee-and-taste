import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import MenuGroup from './MenuGroup';

describe('MenuGroup', () => {
  const menuGroups = [
    {
      id: 1,
      name: '콜드 브루',
      englishName: 'Cold Brew',
      representativeImagePath: '/images/cold_brew.jpg',
    },
  ];

  function renderMenuGroup() {
    return render((
      <MemoryRouter>
        <MenuGroup menuGroups={menuGroups} />
      </MemoryRouter>
    ));
  }

  it('메뉴 그룹에는 콜드 브루가 있다. ', () => {
    const { container } = renderMenuGroup();

    expect(container).toHaveTextContent('콜드 브루');
  });
});
