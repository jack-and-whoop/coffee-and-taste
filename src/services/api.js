import axios from 'axios';

const BASE_URL = 'https://coffee-and-taste.kro.kr/api';

async function fetchData(url) {
  return axios.get(url)
    .then((response) => response.data);
}

export async function fetchCategories() {
  return fetchData(`${BASE_URL}/categories`);
}

export async function fetchMenuGroups(categoryId) {
  return fetchData(`${BASE_URL}/categories/${categoryId}/menu-groups`);
}

export async function fetchMenus(menuGroupId) {
  return fetchData(`${BASE_URL}/menu-groups/${menuGroupId}/menus`);
}
