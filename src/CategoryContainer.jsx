import styled from '@emotion/styled';

const Category = styled.li({
  paddingTop: '100px',
  marginRight: '1em',
  textDecoration: 'none',
  fontSize: '2em',
});

export default function CategoryContainer() {
  return (
    <>
      <Category>음료</Category>
      <Category>푸드</Category>
      <Category>상품</Category>
    </>
  );
}
