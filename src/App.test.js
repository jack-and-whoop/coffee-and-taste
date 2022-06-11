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

  it('로고 이미지를 보여준다. ', () => {
    const { queryByAltText } = render(<App />);

    expect(queryByAltText('coffee-and-taste logo')).not.toBeNull();
  });
});
