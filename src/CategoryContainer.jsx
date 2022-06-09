import styled from '@emotion/styled';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CategoryContainerStyle = styled.div({
  margin: '0 auto',
  width: '40%',
  display: 'grid',
  background: 'beige 100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyItems: 'center',
});

const Category = styled.div({
  padding: '20px 0',
  fontSize: '1.8rem',
  fontWeight: 'bold',
  '& a': {
    color: '#555555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      borderBottom: '2px solid green',
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
