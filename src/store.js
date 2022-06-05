import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

// - 초기 상태 값
const initialState = {
  categories: [],
  menuGroups: [],
  menuList: [],
  menu: null,
};

// - 액션 생성 함수 정의
const GET_CATEGORIES = 'GET_CATEGORIES';

export function getCategories() {
  return {
    type: GET_CATEGORIES,
  };
}

// - 리듀서
function reducer(state = initialState, action = {}) {
  if (action.type === GET_CATEGORIES) {
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
