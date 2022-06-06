import { applyMiddleware, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { fetchCategories, fetchMenuGroups, fetchMenus } from './services/api';

const DEFAULT_CATEGORY_IS_BEVERAGE = 1;

// - 초기 상태 값
const initialState = {
  categories: [],
  menuGroups: [],
  menus: [],
  menu: null,
  selectedCategory: DEFAULT_CATEGORY_IS_BEVERAGE,
};

// - 액션 생성 함수 정의
const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_MENU_GROUPS = 'SET_MENU_GROUPS';
const SET_MENUS = 'SET_MENUS';

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: { categories },
  };
}

export function setMenuGroups(menuGroups) {
  return {
    type: SET_MENU_GROUPS,
    payload: { menuGroups },
  };
}

export function setMenus(menus) {
  return {
    type: SET_MENUS,
    payload: { menus },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function loadMenuGroups(categoryId) {
  return async (dispatch) => {
    const data = await fetchMenuGroups(categoryId);

    dispatch(setMenuGroups(data.menuGroups));
  };
}

export function loadMenuList(menuGroupId) {
  return async (dispatch) => {
    const data = await fetchMenus(menuGroupId);

    dispatch(setMenus(data.menus));
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

  if (action.type === SET_MENU_GROUPS) {
    return {
      ...state,
      menuGroups: action.payload.menuGroups,
    };
  }

  if (action.type === SET_MENUS) {
    return {
      ...state,
      menus: action.payload.menus,
    };
  }

  return state;
}

// - 스토어
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;
