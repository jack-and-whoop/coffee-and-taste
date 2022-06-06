import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CategoryContainerStyle = styled.div({
  display: 'flex',
  paddingTop: '10px',
  background: 'beige 100%',
});

const Category = styled.div({
  padding: '10px 10px 20px 20px',
  marginRight: '1rem',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  '& a': {
    color: '#555555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default function CategoryContainer() {
  const categories = useSelector((state) => state.categories);

  return (
    <CategoryContainerStyle>
      {
        categories.map((category) => (
          <Category key={category.id}>
            <Link to={`/categories/${category.id}/menu-groups`}>
              {category.name}
            </Link>
          </Category>
        ))
      }
    </CategoryContainerStyle>
  );
}
