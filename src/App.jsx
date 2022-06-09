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
  width: '70%',
});

const Header = styled.header({
  width: '100%',
  height: '200px',
  background: 'beige 100%',
});

const LogoContainer = styled.div({
  margin: '0 auto',
  width: '75%',
  '& a': {
    fontSize: '1.8rem',
    color: '#555555',
    textDecoration: 'none',
  },
  padding: '1rem 0',
});

const Logo = styled.h1({
  margin: '0 auto',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: `url(${logo}) center/100% no-repeat`,
});

const ContentContainer = styled.div({
  marginTop: '50px',
  height: 'auto',
});

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <BrowserRouter basename="/">
      <Header>
        <LogoContainer>
          <Link to="/">
            <Logo />
          </Link>
        </LogoContainer>
        <CategoryContainer />
      </Header>
      <Container>
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
