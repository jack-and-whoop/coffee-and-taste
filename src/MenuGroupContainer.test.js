import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import MenuGroupContainer from './MenuGroupContainer';

jest.mock('react-redux');

describe('MenuGroupContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      menuGroups: [
        {
          englishName: 'Cold Brew',
          id: 1,
          name: '콜드 브루',
          representativeImagePath: '/images/cold_brew.jpg',
        },
      ],
    }));
  });

  it('renders menu group ', () => {
    const { container } = render((
      <MemoryRouter>
        <MenuGroupContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('콜드 브루');
  });
});
