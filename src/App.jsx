import styled from '@emotion/styled';

import MenuDetail from './MenuDetail';

import logo from './images/logo.png';
import icedCaffeAmericano from './images/iced-caffe-americano.jpg';
import icedCaffeLatte from './images/iced-caffe-latte.jpg';
import icedCaffeMocha from './images/iced-caffe-mocha.jpg';
import icedCappuccino from './images/iced-cappuccino.jpg';
import icedDolceLatte from './images/iced-dolce-latte.jpg';
import espressoConPanna from './images/espresso-con-panna.jpg';
import icedCaramelMacchiato from './images/iced-caramel-macchiato.jpg';
import icedWhiteChocolateMocha from './images/iced-white-chocolate-mocha.jpg';

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

const MenuContainer = styled.div({
  // border: '1px solid black',
  margin: '40px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
});

const Menu = styled.div({
});

// const MenuImage = styled.div({
//   margin: '0 auto',
//   borderRadius: '50%',
//   width: '100px',
//   height: '100px',
//   background: `url(${icedCaffeAmericano}) center/100% no-repeat`,
// });

const MenuName = styled.div({
  margin: '10px 0',
  fontSize: '16px',
  textAlign: 'center',
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
      <MenuContainer>
        <Menu>
          <div style={{
            margin: '50px auto 30px auto',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            background: `url(${icedCaffeAmericano}) center/100% no-repeat`,
          }}
          />
          <MenuName>아이스 아메리카노</MenuName>
        </Menu>
        <Menu>
          <div style={{
            margin: '50px auto 30px auto',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            background: `url(${icedCappuccino}) center/100% no-repeat`,
          }}
          />
          <MenuName>아이스 카푸치노</MenuName>
        </Menu>
        <Menu>
          <div style={{
            margin: '50px auto 30px auto',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            background: `url(${icedDolceLatte}) center/100% no-repeat`,
          }}
          />
          <MenuName>아이스 돌체 라떼</MenuName>
        </Menu>
        <Menu>
          <div style={{
            margin: '50px auto 30px auto',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            background: `url(${icedCaffeMocha}) center/100% no-repeat`,
          }}
          />
          <MenuName>아이스 카페 모카</MenuName>
        </Menu>
        <Menu>
          <div style={{
            margin: '50px auto 30px auto',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            background: `url(${icedCaffeLatte}) center/100% no-repeat`,
          }}
          />
          <MenuName>아이스 카페 라떼</MenuName>
        </Menu>
        <Menu>
          <div style={{
            margin: '50px auto 30px auto',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            background: `url(${icedWhiteChocolateMocha}) center/100% no-repeat`,
          }}
          />
          <MenuName>아이스 화이트 초콜릿 모카</MenuName>
        </Menu>
        <Menu>
          <div style={{
            margin: '50px auto 30px auto',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            background: `url(${icedCaramelMacchiato}) center/100% no-repeat`,
          }}
          />
          <MenuName>아이스 카라멜 마끼아또</MenuName>
        </Menu>
        <Menu>
          <div style={{
            margin: '50px auto 30px auto',
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            background: `url(${espressoConPanna}) center/100% no-repeat`,
          }}
          />
          <MenuName>에스프레소 콘 파나</MenuName>
        </Menu>
      </MenuContainer>
      <MenuDetail />
    </Container>
  );
}
