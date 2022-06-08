import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { useEffect } from 'react';
import CategoryContainer from './CategoryContainer';
import MenuGroupContainer from './MenuGroupContainer';
import MenuListContainer from './MenuListContainer';
import MenuDetailContainer from './MenuDetailContainer';

import { loadCategories } from './store';

import logo from './images/logo.png';

const Container = styled.div({
  margin: '0 auto',
  width: '55%',
});

const Header = styled.header({
  top: '0',
  width: '55%',
  height: '100px',
  position: 'fixed',
  background: 'beige 100%',
});

const LogoAndTitle = styled.div({
  display: 'flex',
  alignItems: 'center',
  '& a': {
    fontSize: '2rem',
    color: '#555555',
    textDecoration: 'none',
  },
  padding: '1rem 0',
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
  height: 'auto',
});

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <BrowserRouter basename="/coffee-and-taste">
      <Container>
        <Header>
          <LogoAndTitle>
            <Logo />
            <Link to="/">
              <Title>Coffee-and-Taste</Title>
            </Link>
          </LogoAndTitle>
          <CategoryContainer />
        </Header>
        <ContentContainer>
          <Routes>
            <Route path="/categories/:categoryId/menu-groups" element={<MenuGroupContainer />} />
            <Route path="/menu-groups/:menuGroupId" element={<MenuListContainer />} />
            <Route path="/menu-groups/:menuGroupId/menus/:menuId" element={<MenuDetailContainer />} />
          </Routes>
        </ContentContainer>
      </Container>
    </BrowserRouter>
  );
}
