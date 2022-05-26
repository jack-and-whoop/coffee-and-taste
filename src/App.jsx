import styled from '@emotion/styled';

import MenuContainer from './MenuContainer';
import MenuDetail from './MenuDetail';

import logo from './images/logo.png';

const Container = styled.div({
  margin: '0 auto',
  width: '80%',
});

const Header = styled.header({
  width: '80%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  background: 'beige 100%',
});

const Logo = styled.div({
  marginRight: '10px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: `url(${logo}) center/100% no-repeat`,
  // margin: '50px auto 30px auto',
});

const Title = styled.h1({
  margin: 0,
});

const CategoryContainer = styled.ul({
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

const MenuGroupContainer = styled.ul({
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

export default function App() {
  return (
    <Container>
      <Header>
        <Logo />
        <Title>Coffee-and-Taste</Title>
      </Header>
      <CategoryContainer>
        <Category>음료</Category>
        <Category>푸드</Category>
        <Category>상품</Category>
      </CategoryContainer>
      <MenuGroupContainer>
        <MenuGroup>커피</MenuGroup>
        <MenuGroup>디카페인</MenuGroup>
        <MenuGroup>티바나</MenuGroup>
        <MenuGroup>기타</MenuGroup>
      </MenuGroupContainer>
      <MenuContainer />
      <MenuDetail />
    </Container>
  );
}
