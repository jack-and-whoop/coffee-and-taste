import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CategoryContainerStyle = styled.ul({
  display: 'flex',
  margin: '40px 0',
  padding: '0',
  listStyle: 'none',
});

const Category = styled.li({
  paddingTop: '100px',
  marginRight: '1em',
  textDecoration: 'none',
  fontSize: '2em',
});

export default function CategoryContainer() {
  const [categories, setCategories] = useState([]);

  const BASE_URL = 'http://coffee-and-taste.kro.kr/api';

  useEffect(() => {
    axios.get(`${BASE_URL}/categories`)
      .then((response) => setCategories(response.data));
  }, []);

  return (
    <CategoryContainerStyle>
      {
        categories.map((category) => (
          <Category key={category.id}>{category.name}</Category>
        ))
      }
    </CategoryContainerStyle>
  );
}
