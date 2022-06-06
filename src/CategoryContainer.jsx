import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

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
});

export default function CategoryContainer() {
  const categories = useSelector((state) => state.categories);

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
