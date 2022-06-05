import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { fetchCategories } from './services/api';

// - 초기 상태 값
const initialState = {
  categories: [],
  menuGroups: [],
  menuList: [],
  menu: null,
};

// - 액션 생성 함수 정의
const SET_CATEGORIES = 'SET_CATEGORIES';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: { categories },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

// - 리듀서
function reducer(state = initialState, action = {}) {
  if (action.type === SET_CATEGORIES) {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }

  return state;
}

// - 스토어
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
