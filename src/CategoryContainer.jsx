import styled from '@emotion/styled';

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
  return (
    <CategoryContainerStyle>
      <Category>음료</Category>
      <Category>푸드</Category>
      <Category>상품</Category>
    </CategoryContainerStyle>
  );
}
