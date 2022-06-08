import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import CategoryContainer from './CategoryContainer';

jest.mock('react-redux');

describe('CategoryContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '음료' },
        { id: 2, name: '푸드' },
        { id: 3, name: '상품' },
      ],
    }));
  });

  it('renders category list ', () => {
    const { container } = render((
      <MemoryRouter>
        <CategoryContainer />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('음료');
  });
});
