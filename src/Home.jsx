import styled from '@emotion/styled';

import CategoryContainer from './CategoryContainer';
import MenuGroupContainer from './MenuGroupContainer';
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

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <Title>Coffee-and-Taste</Title>
      </Header>
      <CategoryContainer />
      <MenuGroupContainer />
      <MenuContainer />
      <MenuDetail />
    </Container>
  );
}
