import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
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

  it('renders title of page ', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('Coffee-and-Taste')).not.toBeNull();
  });
});
