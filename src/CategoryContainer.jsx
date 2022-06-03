import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CategoryContainerStyle = styled.div({
  display: 'flex',
  paddingTop: '10px',
  background: 'beige 100%',
});

const Category = styled.div({
  padding: '10px 10px 20px 20px',
  marginRight: '1em',
  fontSize: '2em',
});

export default function CategoryContainer() {
  const [categories, setCategories] = useState([]);

  const BASE_URL = 'https://coffee-and-taste.kro.kr/api';

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
