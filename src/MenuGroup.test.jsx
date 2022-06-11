import { render } from '@testing-library/react';

describe('MenuGroup', () => {
  function renderMenuGroup() {
    return render((
      <MenuGroup />
    ));
  }

  it('메뉴 그룹에는 콜드 브루가 있다. ', () => {
    const { container } = renderMenuGroup();

    expect(container).toHaveTextContent('콜드 브루');
  });
});
