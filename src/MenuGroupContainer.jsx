import styled from '@emotion/styled';

const MenuGroupContainerStyle = styled.ul({
  display: 'flex',
  margin: '40px 0',
  padding: '0',
  listStyle: 'none',
});

const MenuGroup = styled.li({
  marginRight: '1em',
  textDecoration: 'none',
  fontSize: '1.5em',
});

export default function MenuGroupContainer() {
  return (
    <MenuGroupContainerStyle>
      <MenuGroup>커피</MenuGroup>
      <MenuGroup>디카페인</MenuGroup>
      <MenuGroup>티바나</MenuGroup>
      <MenuGroup>기타</MenuGroup>
    </MenuGroupContainerStyle>
  );
}
