import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styled from '@emotion/styled';

import Home from './Home';
import CategoryContainer from './CategoryContainer';
import MenuListContainer from './MenuListContainer';

import logo from './images/logo.png';

const Container = styled.div({
  margin: '0 auto',
  width: '80%',
});

const Header = styled.header({
  top: '0',
  width: '80%',
  height: '100px',
  position: 'fixed',
  background: 'beige 100%',
});

const LogoAndTitle = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Logo = styled.div({
  margin: '0px 10px 0px 10px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: `url(${logo}) center/100% no-repeat`,
});

const Title = styled.h1({
  margin: '0',
});

const ContentContainer = styled.div({
  marginTop: '180px',
  backgroundColor: '#E4ECFE',
  height: 'auto',
});

export default function App() {
  return (
    <BrowserRouter basename="/coffee-and-taste">
      <Container>
        <Header>
          <LogoAndTitle>
            <Logo />
            <Title>Coffee-and-Taste</Title>
          </LogoAndTitle>
          <CategoryContainer />
        </Header>
        <ContentContainer>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu-groups/:menuGroupId" element={<MenuListContainer />} />
          </Routes>
        </ContentContainer>
      </Container>
    </BrowserRouter>
  );
}
